<script>
  import { Button, Icon, Styles, Col } from "sveltestrap";
  export let name;
  export let info;

  const copyPrompt = () => {
    navigator.clipboard.writeText(name);
  };
</script>

<Col xs="6" sm="6" md="6" lg="5" xl="4" class="border-end">
  <Styles />
  <Button
    outline
    on:click={copyPrompt}
    style="border-color:transparent; background:transparent; color:initial"
  >
    <Icon name="clipboard-plus" />
    {name}
  </Button>
</Col>

<Col xs="auto">
  {info}
</Col>
