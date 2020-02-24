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
    const attendeeSection = document.getElementById("show_only_if_attending");
    const showAttendeeSection = isAttending =>
        attendeeSection.style.display = isAttending ? null : "none";

    showAttendeeSection(false);

    Array.from(document.querySelectorAll(".attending_input")).forEach(input => {
      input.addEventListener("change", event => {
          showAttendeeSection(event.target.value === "yes")
      });
    });
})()
