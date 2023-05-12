<script>
  import contents from "../assets/content.json";
  import {
    Accordion,
    AccordionItem,
    Row,
    Col,
    Table,
    Column,
    Button,
    Icon,
  } from "sveltestrap";

  import "../assets/custom.css";
</script>

<Row class="mb-5">
  <Col xs="12" sm="10" md="9" lg="8" xl="7" class="d-block mx-auto">
    <Accordion stayOpen color="dark" class="mb-5">
      {#each Object.keys(contents) as key}
        <AccordionItem header={key}>
          <Table
            rows={contents[key]}
            let:row
            bordered
            striped
            class="hidden-footer"
          >
            <Column
              class="col-6 col-sm-6 col-md-6 col-lg-5 col-xl-4"
              header="prompt"
            >
              <Button
                outline
                on:click={() => navigator.clipboard.writeText(row.name)}
                style="border-color:transparent; background:transparent; color:initial"
              >
                <Icon name="clipboard-plus" />
                {row.name}
              </Button>
            </Column>
            <Column class="col-auto" header="information">
              {row.info}
            </Column>
          </Table>
        </AccordionItem>
      {/each}
    </Accordion>
  </Col>
</Row>
