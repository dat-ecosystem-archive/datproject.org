const html = require('choo/html')
const css = require('sheetify')

const logoCss = css`
  :host > img {
    transition: transform .5s ease-in-out;
    width: inherit;
  }
  :host:hover > img, :host:focus > img{
    transform: rotate(360deg);
  }
`

module.exports = function () {
  return html`
    <nav class="bb b--dat-neutral-10 dt w-100 w-100 border-box pa3 ph5-l">
      <div class="dtc v-mid w-25">
        <a class="${logoCss} v-mid dib link dim mr2 w2 h2" href="https://dat-ecosystem-archive.github.io/datproject.org/" title="Dat Foundation">
          <img src="https://dat-ecosystem-archive.github.io/datproject.org/public/img/dat-logo-small.png">
        </a>
        <a class="v-mid link dim color-neutral b f5 f3-ns dib-l dn" href="https://dat-ecosystem-archive.github.io/datproject.org/" title="Dat Foundation">Dat<span class="ml1 color-neutral-60">Foundation</span></a>
      </div>

      <div class="dtc v-mid w-75 tr">
        <a class="link dim color-neutral ttu tracked f6 f5-ns dib mr3 mr4-ns" href="https://blog.dat-ecosystem.org"  title="Dat Blog">Blog</a>
        <a class="link dim color-neutral ttu tracked f6 f5-ns dib mr3 mr4-ns" href="https://docs.datproject.org" title="Dat Documentation">Docs</a>
        <a class="link dim color-neutral ttu tracked f6 f5-ns dib mr3 mr4-ns" href="https://dat-ecosystem-archive.github.io/datproject.org/dist/about" title="About Dat Foundation">About</a>
      </div>
    </nav>
  `
}
