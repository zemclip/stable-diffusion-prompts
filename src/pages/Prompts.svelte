<script>
  import contents from "../assets/content.json";
  import { Accordion, AccordionItem, Row, Col } from "sveltestrap";
  import CopyableText from "../lib/CopyableText.svelte";
</script>

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
