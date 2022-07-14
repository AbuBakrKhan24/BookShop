<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid ms-5">
      <a class="navbar-brand" href="#">BOOKDOM</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item ms-5">
            <a class="nav-link active text-dark" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item dropdown ms-5">
            <a
              class="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Browse
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown ms-5">
            <a
              class="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Writer Opportunity
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <li class="nav-item ms-5">
          <a class="nav-link active text-dark" aria-current="page" href="#"
            >Log in</a
          >
        </li>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
li {
  list-style-type: none;
}

nav.navbar {
  font-family: "Times New Roman", Times, serif;
}
</style>
