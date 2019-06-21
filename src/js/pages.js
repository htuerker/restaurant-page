import menuImg from '../assets/img/menu.jpg';

const home = () => {
  return `
    <div class="home">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et egestas diam.
        Nulla facilisi. Phasellus sollicitudin bibendum orci eu viverra. Morbi orci ante,
        mollis eget sodales nec, faucibus ac dolor. Donec rutrum ligula massa, at
        sollicitudin magna pretium eu. Nulla semper tellus ut lectus imperdiet, non
        pretium libero efficitur. Maecenas et interdum leo, in pretium eros.
        Morbi vehicula nisi quis leo ultrices, eget fermentum elit suscipit.
        Vestibulum porttitor tristique nisl. Vivamus auctor dui urna, at eleifend
        ex cursus condimentum. Nunc interdum massa quis libero suscipit,
        et sollicitudin mauris dapibus. Interdum et malesuada fames ac ante ipsum
        primis in faucibus.
      </p>
    </div>
  `;
}

const menu = () => {
  return `
    <div class="menu">
      <img src="${menuImg}"></img>
    </div>
  `;
}

const contact = () => {
  return `
    <div class="contact">
      <p>Etiam dapibus, tortor eget aliquet mollis, metus nulla tempor enim, sit amet
        finibus nunc libero at urna. Ut luctus pretium ex in iaculis. Nam rhoncus,
        nisl at efficitur pharetra, ligula sapien porta turpis, sed mollis nibh ipsum
        egestas neque. Donec commodo est justo, vitae semper libero aliquet id.
        Donec sollicitudin odio sollicitudin, faucibus tellus at, laoreet risus.
        Phasellus cursus mi quis augue vulputate, eu gravida dui interdum. In ut pretium
        diam. Duis lobortis sapien sem, gravida varius nunc ullamcorper vel. Fusce nec
        enim dui. Duis erat tortor, sagittis a molestie dapibus, bibendum ac nunc.
        Duis finibus finibus imperdiet.</p>
    </div>
  `;
}

const about = () => {
  return `
    <div class="about">
      <p>In hac habitasse platea dictumst. Nam aliquam hendrerit lorem, a tempor urna
      gravida lacinia. Ut diam est, aliquet eu feugiat auctor, hendrerit convallis est.
      In felis sapien, rutrum vel quam vitae, interdum egestas velit. Nulla nisl enim,
      varius elementum ligula vel, eleifend porta felis. Ut at nisl eu ex fermentum ullamcorper
      nec at mauris. Ut mollis urna id massa bibendum congue. Pellentesque at sagittis
      risus, sit amet rutrum est.</p>
    </div>
  `;
}

const notFound = () => {
  return `
    <div class="not_found">
      Not Found
    </div>
  `;
}

export { home, menu, contact, about, notFound }
