<script lang="ts">
  export let node: any;
  export let filePath: string;
  export let app: any;
  export let plugin: any;

  const text = (node?.children ?? [])
    .map((c: any) => typeof c?.value === "string" ? c.value : "")
    .join("")
    .trim();
  const icon = node?.props?.icon ?? "💬";
</script>

<span class="acr-comment" title="Comment">
  <span class="acr-icon" aria-hidden="true">{icon}</span>
  <span class="acr-text">{text}</span>
</span>

<style>
  .acr-comment {
    display:block; flex-basis:100%;
    margin:.25rem 0 0 1.6rem; font-size:.85rem; line-height:1.35;
    color: var(--text-muted); font-style: italic;
  }
  .acr-icon { margin-right:.35rem; opacity:.8; }
</style>
