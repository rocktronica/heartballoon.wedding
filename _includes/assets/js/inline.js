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
    const PASSWORD = "rsvp";

    const modal = document.getElementById("password_modal");
    const form = document.getElementById("password_form");
    const input = document.getElementById("password");

    const main = document.getElementById("main");

    const enter = () => {
        modal.style.display = "none";
        main.style.display = "block";
    }

    if (
        localStorage.password === PASSWORD &&
        location.search !== `?${PASSWORD}`
    ) {
        enter();
        return;
    }

    input.addEventListener("keydown", event => {
        modal.classList.remove("invalid");
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        const value = input.value.trim().toLowerCase();

        localStorage.password = value;

        if (value === PASSWORD) {
            enter();
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
