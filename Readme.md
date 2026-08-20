# Team Cards — Swiper Coverflow Slider

A responsive team-member card slider built with **Bootstrap 5.3.8** for base styling and **Swiper 12** for the coverflow carousel effect.

## Preview

Center card is fully in focus; side cards are scaled down and blurred, creating a 3D coverflow look. Includes pagination dots, prev/next arrows, and an optional scrollbar.

## Tech Stack

- HTML5
- Bootstrap 5.3.8 (CSS reset + button styling)
- Swiper.js 12 (bundle build — no separate module imports needed)
- Google Fonts (Poppins)

## File Structure

```
├── index.html
├── style.css
└── script.js
```

## Setup

1. Clone or download the project files.
2. Add your team member photos to an `images/` folder, matching the paths referenced in `index.html` (`img-1.jpg` through `img-6.jpg`).
3. Open `index.html` in a browser — no build step or local server required, since all dependencies load from CDN.

## Swiper Configuration

```javascript
var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopAdditionalSlides: 3,
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: {
        invert: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});
```

### Feature notes

| Option | Purpose |
|---|---|
| `loop` | Enables infinite looping through slides |
| `loopAdditionalSlides` | Adds extra clone slides on both sides so the loop stays visually symmetric with `slidesPerView: "auto"` |
| `autoplay` | Auto-advances slides; pauses on hover |
| `effect: "coverflow"` | 3D perspective effect for centered slide focus |
| `keyboard` | Left/right arrow key navigation, active globally via `onlyInViewport: false` |
| `pagination` | Clickable bullet dots showing slide position |
| `navigation` | Prev/next arrow buttons |
| `mousewheel` | Scroll-to-navigate; `invert: true` reverses scroll direction |
| `scrollbar` | Draggable scrollbar as an alternate navigation method |

## Required HTML Structure

Navigation, pagination, and scrollbar elements must be **siblings of `.swiper-wrapper`**, nested inside `.swiper`:

```html
<section class="swiper mySwiper">
    <div class="swiper-wrapper">
        <!-- .card.swiper-slide items -->
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
</section>
```

## Known Issues / Things to Double-Check

- **Class name casing:** the Swiper selector (`.mySwiper`) must exactly match the class on the `<section>` element (case-sensitive). A mismatch silently prevents Swiper from initializing.
- **Autoplay syntax:** older/flat keys like `autoplay: true`, `autoplayTimeout`, `autoplayHoverPause` are not recognized by Swiper 12 — use the nested object form shown above (`autoplay: { delay, pauseOnMouseEnter }`).
- **Card height:** `.card` uses `min-height: 90%` with `height: auto` so cards with longer titles/text (e.g. two-line titles) grow instead of overflowing.
- **Pagination vs. scrollbar redundancy:** both indicate slide position; consider keeping only one if the UI feels cluttered.
- **Autoplay + manual navigation:** arrow keys, mousewheel, and drag don't pause autoplay by default. Set `autoplay.disableOnInteraction: true` to stop autoplay permanently after manual interaction, or leave it `false` (default) to let it resume after the next delay.

## Styling Customization

Key CSS custom points in `style.css`:

- `.card-image` border color (`#9176FF`) — also used to theme nav arrows/scrollbar for visibility against the `#f4f4f4` background.
- `.swiper-slide:not(.swiper-slide-active)` — controls the blur/scale effect on non-centered cards.