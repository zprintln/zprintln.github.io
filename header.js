class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
            <style>
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    background-color: #ffffff;
                    border-bottom: 1px solid #d2d2d7;
                }
                .logo a {
                    text-decoration: none;
                    font-size: 1.5rem;
                    color: #1d1d1f;
                }
                .navigation {
                    list-style: none;
                    display: flex;
                    gap: 1.5rem;
                    margin: 0;
                    padding: 0;
                }
                .navigation a {
                    text-decoration: none;
                    color: #1d1d1f;
                    transition: color 0.3s ease;
                }
                .navigation a:hover,
                .navigation a.active {
                    color: #0071e3;
                }
            </style>
            <header>
                <nav>
                    <div class="logo">
                        <a href="index.html">Zadie Moon</a>
                    </div>
                    <ul class="navigation">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);
