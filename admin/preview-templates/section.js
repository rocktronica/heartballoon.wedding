import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    const showTitle = entry.getIn(["data", "showTitle"], false);
    const title = entry.getIn(["data", "title"], null);
    const sectionStyle = {
        backgroundImage:
            `url(${entry.getIn(["data", "background-image"], null)})`
    };
    const overlayStyle = {
        background: `rgba(255, 255, 255, ${
            (entry.getIn(["data", "overlay", "opacity"], 50) / 100)
        }%`,
        backdrop-filter: `blur(${entry.getIn(["data", "overlay", "blur"], 0)}px)`
    }

    return html`
      <section style=${{...sectionStyle}}>
        <div className="inner" style=${{...overlayStyle}}>
            <h2>${title}</h2>
            ${this.props.widgetFor("body")}
        </div>
      </section>
    `;
  }
});

export default Page;
