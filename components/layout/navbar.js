import Links from './links';

<nav className="nav-links">
<div className="navbar-left">
    <h4>NAV</h4>
    <ul><Links router={props.router} /></ul>
</div>
<div className="logout-link">
    <a href="/logged-out">Logout</a>
    <small>Page by <a style={{ textDecoration: 'none' }}>Cliff Crerar</a></small>
</div>
</nav>
<hr className="nav-bottom-line" />