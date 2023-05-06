<script>
  import topBanar from "./assets/star-banar.png";
  import bottomBanar from "./assets/nature-banar.png";
  import contents from "./assets/content.json";
  import { Navbar, Accordion, AccordionItem, Row } from "sveltestrap";
  import CopyableText from "./lib/CopyableText.svelte";
</script>

<header>
  <Navbar style="background-image: url({topBanar})">
    <h1 class="text-light">Stable Diffusion Prompts</h1>
  </Navbar>
</header>

<main>
  <Accordion stayOpen>
    {#each Object.keys(contents) as key}
      <AccordionItem header={key}>
        {#each contents[key] as prompt, index}
          <Row
            class="border-top align-items-center {contents[key].length - 1 ===
            index
              ? 'border-bottom'
              : ''}"
            style="border-collapse:collapse"
          >
            <CopyableText {...prompt} />
          </Row>
        {/each}
      </AccordionItem>
    {/each}
  </Accordion>
</main>

<footer>
  <Navbar
    class="fixed-bottom pb-5"
    style="background-image: url({bottomBanar})"
  />
</footer>

<style>
</style>
