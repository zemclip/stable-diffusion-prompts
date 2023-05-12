<script>
  import topBanar from "./assets/star-banar.png";
  import bottomBanar from "./assets/nature-banar.png";
  import Router from "svelte-spa-router";
  import Prompts from "./pages/Prompts.svelte";
  import {
    Navbar,
    Container,
    Collapse,
    Button,
    ButtonToolbar,
    Icon,
    Styles,
  } from "sveltestrap";

  const routes = {
    "/prompts": Prompts,
  };

  let isOpen = false;
  const handleUpdate = (event) => {
    isOpen = event.detail;
  };
</script>

<Styles />
<header>
  <Navbar style="background-image: url({topBanar})">
    <Button outline light on:click={() => (isOpen = !isOpen)}>
      <Icon name="justify" />
    </Button>
    <h1 class="text-light">Stable Diffusion References</h1>
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Container fluid navbar>
        <ButtonToolbar>
          <Button href="#/prompts">prompt reference</Button>
          <Button href="#">model reference</Button>
        </ButtonToolbar>
      </Container>
    </Collapse>
  </Navbar>
</header>

<main>
  <Router {routes} />
</main>

<footer>
  <Navbar
    class="fixed-bottom pb-5"
    style="background-image: url({bottomBanar})"
  />
</footer>

<style>
</style>
