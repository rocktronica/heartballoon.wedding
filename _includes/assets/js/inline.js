if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

(() => {
    // Just trying to make it not seem totally open to the public..
    const PASSWORD = "leia";
    const PHOTOS_PASSWORD = "photos";

    const modal = document.getElementById("password_modal");
    const form = document.getElementById("password_form");
    const input = document.getElementById("password");

    const main = document.getElementById("main");

    const enter = () => {
        modal.style.display = "none";
        main.style.display = "block";
    }

    const redirectToPhotos = () => {
        location.href = "https://doreanrayephotography.pixieset.com/tommyleia/";
    }

    if (location.search == `?${PASSWORD}`) {
        enter();
        return;
    }

    input.addEventListener("keydown", event => {
        modal.classList.remove("invalid");
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        const value = input.value.trim().toLowerCase();

        if (value === PASSWORD) {
            enter();
        } else if (value === PHOTOS_PASSWORD) {
            redirectToPhotos();
        } else {
            modal.classList.add("invalid");
        }
    });
})();

(() => {
    const attendeeSection = document.getElementById("show_only_if_attending");
    const showAttendeeSection = isAttending =>
        attendeeSection.style.display = isAttending ? null : "none";

    showAttendeeSection(false);

    Array.from(document.querySelectorAll(".attending_input")).forEach(input => {
      input.addEventListener("change", event => {
          showAttendeeSection(event.target.value === "yes");
      });
    });
})();
