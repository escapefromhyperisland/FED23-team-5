


  const play = () => {
    window.removeEventListener("click", play);
    window.removeEventListener("touchstart", play);
    document.querySelectorAll("video, audio").forEach(el => el.play());
    document
      .querySelectorAll("[sound],a-sound")
      .forEach(el => el.components.sound.playSound());
  };
  window.addEventListener("click", play);
  window.addEventListener("touchstart", play);

  