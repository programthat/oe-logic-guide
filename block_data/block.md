# {{block.displayName}}

**Description:** "{{block.description}}"

This block has a limit of **{{block.limit}}** elements.

### Aliases
This block goes by the following aliases: {{block.aliases}}.

### Stats
<ul>
    <li><strong>ID:</strong> <code>{{block.id}}</code></li>
    <li><strong>Description:</strong> {{block.description}}</li>
    <li><strong>TypeScript Path:</strong> <code>{{block.tsPath}}</code></li>
    <li><strong>Asset Folder:</strong> <code>{{block.assetFolder}}</code></li>
</ul>

**Limit:** `{{ block.limit ?? blockFamilies[block.limitFamily] }}`<br>
**Family:** `{{ block.limitFamily }}`

*Source code at: {{block.tsPath}}*