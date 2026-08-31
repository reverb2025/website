document.addEventListener('DOMContentLoaded', function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    const reveal = () => {
        document.body.classList.add('is-ready');
        if (mainContent) {
            mainContent.classList.remove('hidden');
            mainContent.classList.add('show');
        }
    };

    if (loadingScreen && mainContent) {
        const loadMs = reduceMotion ? 400 : 2500;
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                reveal();
            }, reduceMotion ? 0 : 800);
        }, loadMs);
    } else {
        reveal();
    }

    initTracklists();

    if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
            requestAnimationFrame(() => {
                target.scrollIntoView({ block: 'start' });
            });
        }
    }

    if (!reduceMotion) {
        initParallax();
    }
});

window.addEventListener('beforeunload', function () {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
});

function initTracklists() {
    document.querySelectorAll('.tracklist[data-preview]').forEach((list) => {
        const preview = document.querySelector(list.dataset.preview);
        if (!preview) return;
        const img = preview.querySelector('img');

        const show = (row) => {
            const src = row.getAttribute('data-src');
            if (!src) return;
            img.src = src;
            preview.classList.add('is-on');
            list.querySelectorAll('li').forEach((item) => item.classList.remove('is-active'));
            row.classList.add('is-active');
        };

        const hide = () => {
            preview.classList.remove('is-on');
            list.querySelectorAll('li').forEach((item) => item.classList.remove('is-active'));
        };

        list.querySelectorAll('li').forEach((row) => {
            row.addEventListener('mouseenter', () => show(row));
            row.addEventListener('focus', () => show(row));
            row.addEventListener('click', () => show(row));
        });

        list.addEventListener('mouseleave', hide);
        list.addEventListener('focusout', (event) => {
            if (!list.contains(event.relatedTarget)) hide();
        });
    });
}

function initParallax() {
    const waveform = document.querySelector('.waveform');
    const lagEls = document.querySelectorAll('[data-lag]');
    const leakEls = document.querySelectorAll('[data-speed]');
    if (!waveform && !lagEls.length && !leakEls.length) return;

    let ticking = false;

    const update = () => {
        const y = window.scrollY || window.pageYOffset;
        const vh = window.innerHeight;

        if (waveform) {
            const quiet = waveform.classList.contains('waveform--quiet');
            const drift = y * (quiet ? 0.08 : 0.14);
            waveform.style.transform = 'translate3d(0, ' + (-drift) + 'px, 0)';
        }

        lagEls.forEach((el) => {
            const speed = parseFloat(el.dataset.lag) || 0.2;
            el.style.transform = 'translate3d(0, ' + (y * speed) + 'px, 0)';
        });

        leakEls.forEach((el) => {
            const speed = parseFloat(el.dataset.speed) || 0.1;
            const rect = el.getBoundingClientRect();
            const offset = (rect.top - vh * 0.5) * speed;
            el.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
        });

        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
}
