import { Component } from '@stencil/core';
import tocbot from 'tocbot';
import anchorJS from 'anchor-js';

@Component({
  tag: 'at-toc',
  styleUrl: 'at-toc.scss'
})
export class AtToc {

  // Indicate that name should be a public property on the component

  tocbot() {
    /*  |---------------| TocBot |---------------|  */
    // https://github.com/tscanlin/tocbot
      tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.js-at-toc',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.js-at-toc-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h2, h3, h4, h5, h6',
        collapseDepth: 2,
        positionFixedSelector: '.js-at-toc',
      });
  }

  anchorjs() {
    /*  |---------------| anchorjs.js |---------------|  */
    // https://www.bryanbraun.com/anchorjs
      var anchors = new anchorJS();
      anchors.options = {
        visible: "hover",
        placement: "right",
        icon: "§"
      };
      anchors.add(".at-article h2, .at-article h3, .at-article h4, .at-article h5, .at-article h6, h2, h3, h4, h5, h6");
  }
  componentDidLoad() {
    this.anchorjs();
    this.tocbot();
  }

  render() {
    return (
      <div class="js-at-toc"></div>
    );
  }
}
