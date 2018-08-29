import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'at-control',
  styleUrl: 'at-control.scss'
})
export class AtControl {

  // Indicate that name should be a public property on the component
  @Prop() content: string = 'at-article';

  @State() lang: string = 'en';

  language() {
    var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
    this.lang = lang;
    console.log(this.lang);
  }
  increaseFont() {
    var root = document.getElementById('at-article');
    var size = window.getComputedStyle(root, null).getPropertyValue('font-size');
    var currentSize = parseFloat(size);
    root.style.fontSize = (currentSize + 2) + 'px';
  }
  decreaseFont() {
    var root = document.getElementById('at-article');
    var size = window.getComputedStyle(root, null).getPropertyValue('font-size');
    var currentSize = parseFloat(size);
    root.style.fontSize = (currentSize - 2) + 'px';
  }
  resetFont() {
    var root = document.getElementById('at-article');
    root.style.fontSize = 'unset';
  }
  toggleToc() {
    var toc = document.getElementsByTagName('at-toc')[0];
    var controlToc = document.getElementsByClassName('at-control-toc')[0];
    var className = 'js-at-toggle-toc';
    controlToc.classList.toggle('at-control-toc-active');
    if (toc.classList) {
      var result = toc.classList.toggle(className);
      if(result) {
        controlToc.textContent = "Show toc";
      } else {
        controlToc.textContent = "Hide toc";
      }
    } else {
      var classes = toc.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
      else
      classes.push(className);

      toc.className = classes.join(' ');
    }
  }
  changeTheme(el) {
    var root = document.getElementById('at-article').parentElement;
    //var controlTheme = document.getElementsByClassName('at-control-theme')[0];
    var currentTheme = root.getAttribute('theme');
    var theme = el.target.getAttribute('id');
    console.log();
    root.removeAttribute('theme');
    root.setAttribute('theme', theme);

    var controlThemeContent = document.getElementsByClassName('at-control-dropdown-content-theme')[0];
    //var controlThemeItems = document.getElementsByClassName('at-control-dropdown-content-theme')[0].children;
    var currentItem = controlThemeContent.querySelector('#'+currentTheme);
    currentItem.classList.remove('is-active');
    el.target.classList.add('is-active');
  }
  setTheme() {
    var root = document.getElementById('at-article').parentElement;
    var currentTheme = root.getAttribute('theme');
    var controlThemeContent = document.getElementsByClassName('at-control-dropdown-content-theme')[0];
    var currentItem = controlThemeContent.querySelector('#'+currentTheme);
    currentItem.classList.add('is-active');
  }
  print() {
    window.print();
  }

  componentDidLoad() {
    this.language();
    this.setTheme();
  }

  render() {
    return (
      <div class="at-control">
        <a class="at-control-toc" onClick={this.toggleToc}>Hide toc</a>
        <span class="at-control-font"><a onClick={this.increaseFont}>+</a> <a onClick={this.resetFont}>A</a> <a onClick={this.decreaseFont}>−</a></span>

        <div class="at-control-dropdown">
          <span class="at-control-export">Export</span>
          <div class="at-control-dropdown-content-export">
            <a href="#" onClick={this.print} id="print">Print</a>
          </div>
        </div>

        <div class="at-control-dropdown">
          <span class="at-control-theme">Theme</span>
          <div class="at-control-dropdown-content-theme">
            <a href="#" onClick={this.changeTheme.bind(this)} id="default">at-article</a>
            <a href="#" onClick={this.changeTheme.bind(this)} id="classic">classic</a>
          </div>
        </div>
      </div>
    );
  }
}
