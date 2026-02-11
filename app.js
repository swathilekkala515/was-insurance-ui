document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     AGE INCREMENT
  ===================== */
  const ageBtn = document.getElementById("ageAdd");
  const ageValue = document.getElementById("ageValue");

  if (ageBtn && ageValue) {
    ageBtn.addEventListener("click", () => {
      let age = parseInt(ageValue.textContent, 10);
      ageValue.textContent = age + 1;
    });
  }

  /* =====================
     TRIP TAB SWITCH
  ===================== */
  const tripTabs = document.querySelectorAll(".trip-tabs button");

  tripTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tripTabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  /* =====================
     MOBILE MENU CLOSE
  ===================== */
  const closeMenu = document.getElementById("closeMenu");

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      window.history.back();
    });
  }

});


