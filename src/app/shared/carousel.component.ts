import {Component, OnDestroy, Input} from '@angular/core';
import { SlideComponent } from './slide.component';

export enum Direction {UNKNOWN, NEXT, PREV}

@Component({
    selector: 'apfem-carousel',
    template: `
    <div (mouseenter)="pause()" (mouseleave)="play()" class="carousel slide">
        <ol class="carousel-indicators" [hidden]="slides.length <= 1">
            <li *ngFor="let slide of slides" [class.active]="slide.active === true" (click)="select(slide)"></li>
        </ol>
        <div class="carousel-inner"><ng-content></ng-content></div>
        <a class="left end-xs carousel-control row middle-xs" (click)="prev()" [hidden]="!slides.length">
            <md-icon class="carousel-icon">chevron_left</md-icon>
        </a>
        <a class="right carousel-control row middle-xs" (click)="next()" [hidden]="!slides.length">
            <md-icon class="carousel-icon">chevron_right</md-icon>
        </a>
    </div>
  `
})
export class CarouselComponent implements OnDestroy {
    @Input() public noWrap: boolean;
    @Input() public noPause: boolean;
    @Input() public noTransition: boolean;

    @Input() public get interval(): number {
        return this._interval;
    }

    slides: Array<SlideComponent> = [];
    currentInterval: any;
    isPlaying: boolean;
    destroyed = false;
    currentSlide: SlideComponent;
    _interval: number;

    public set interval(value: number) {
        this._interval = value;
        this.restartTimer();
    }

    ngOnDestroy() {
        this.destroyed = true;
    }

    select(nextSlide: SlideComponent, direction: Direction = Direction.UNKNOWN) {
        const nextIndex = nextSlide.index;
        if (direction === Direction.UNKNOWN) {
            direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
        }

        // Prevent this user-triggered transition from occurring if there is already one in progress
        if (nextSlide && nextSlide !== this.currentSlide) {
            this.goNext(nextSlide, direction);
        }
    }

    private goNext(slide: SlideComponent, direction: Direction) {
        if (this.destroyed) {
            return;
        }

        slide.direction = direction;
        slide.active = true;

        if (this.currentSlide) {
            this.currentSlide.direction = direction;
            this.currentSlide.active = false;
        }

        this.currentSlide = slide;

        // every time you change slides, reset the timer
        this.restartTimer();
    }

    private getSlideByIndex(index: number) {
        const len = this.slides.length;
        for (let i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
    }

    getCurrentIndex() {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    }

    next() {
        const newIndex = (this.getCurrentIndex() + 1) % this.slides.length;

        if (newIndex === 0 && this.noWrap) {
            this.pause();
            return;
        }

        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    }

    prev() {
        const newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;

        if (this.noWrap && newIndex === this.slides.length - 1) {
            this.pause();
            return;
        }

        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    }

    restartTimer() {
        this.resetTimer();
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(() => {
                const nInterval = +this.interval;
                if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
                    this.next();
                } else {
                    this.pause();
                }
            }, interval);
        }
    }

    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = null;
        }
    }

    public play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }

    public pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }

    public addSlide(slide: SlideComponent) {
        slide.index = this.slides.length;
        this.slides.push(slide);
        if (this.slides.length === 1 || slide.active) {
            this.select(this.slides[this.slides.length - 1]);
            if (this.slides.length === 1) {
                this.play();
            }
        } else {
            slide.active = false;
        }
    }

    public removeSlide(slide: SlideComponent) {
        this.slides.splice(slide.index, 1);

        if (this.slides.length === 0) {
            this.currentSlide = null;
            return;
        }

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].index = i;
        }
    }
}

