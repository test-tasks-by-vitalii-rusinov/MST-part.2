function adjustLayout() {
  const container = document.getElementById('text');
  const screenWidth = window.innerWidth;

  container.innerHTML = '';

  if (screenWidth < 768) {
    container.innerHTML = `
      <div class="str">
        <span>We're here</span>
        <div class="hole hole1"></div>
      </div>
      <div class="str">
        <span>to</span>
        <div class="hole hole2"></div>
        <span>make</span>
      </div>
      <div class="str">
        <div class="hole hole3"></div>
        <span>healthy living</span>
      </div>
      <div class="str">
        <span>effortless, so you</span>
      </div>
      <div class="str">
        <span>can</span>
        <div class="hole hole4"></div>
        <span>live longer</span>
      </div>
      <div class="str">
        <span>and happier</span>
        <div class="hole hole5"></div>
      </div>
    `;  
  } else {
    container.innerHTML = `
      <div class="str">
        <span>We're here</span>
        <div class="hole hole1"></div>
        <span>to make</span>
      </div>
      <div class="str">
        <span>healthy</span>
        <div class="hole hole2"></div>
        <span>living effortless,</span>
      </div>
      <div class="str">
        <span>so you can</span>
        <div class="hole hole3"></div>
        <span>live longer</span>
      </div>
      <div class="str">
        <span>and happier</span>
        <div class="hole hole4"></div>
      </div>
    `;
  }
}

window.addEventListener('resize', adjustLayout);

window.addEventListener('load', adjustLayout);
