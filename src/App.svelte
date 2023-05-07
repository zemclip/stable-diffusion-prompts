<script>
  import topBanar from "./assets/star-banar.png";
  import bottomBanar from "./assets/nature-banar.png";
  import contents from "./assets/content.json";
  import { Navbar, Accordion, AccordionItem, Row, Col } from "sveltestrap";
  import CopyableText from "./lib/CopyableText.svelte";
</script>

<header>
  <Navbar style="background-image: url({topBanar})">
    <h1 class="text-light">Stable Diffusion Prompts</h1>
  </Navbar>
</header>

<main>
  <Row class="mb-5">
    <Col xs="12" sm="10" md="9" lg="8" xl="7" class="d-block mx-auto">
      <Accordion stayOpen color="dark" class="mb-5">
        {#each Object.keys(contents) as key}
          <AccordionItem header={key}>
            {#each contents[key] as prompt, index}
              <Row
                class="border-top align-items-center 
            {contents[key].length - 1 === index ? 'border-bottom' : ''}"
              >
                <CopyableText {...prompt} />
              </Row>
            {/each}
          </AccordionItem>
        {/each}
      </Accordion>
    </Col>
  </Row>
</main>

<footer>
  <Navbar
    class="fixed-bottom pb-5"
    style="background-image: url({bottomBanar})"
  />
</footer>

<style scoped>
  button.accordion-button {
    font-weight: 500;
  }
</style>
