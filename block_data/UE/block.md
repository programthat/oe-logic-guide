---
render_with_liquid: false
---

# {{block.displayName}}

A basic block, you can scale and rotate to your needs, not much else.

<br><br><br>

### Aliases
{{block.aliases ? `This block goes by the following aliases: ${block.aliases.map(x=>'"'+x+'"').join(', ')}` : 'This block doesn\'t have any aliases'}}

### Stats
- **ID:** `{{block.id}}`
- **In-Game Description:** "{{block.description}}"
- **Asset Folder:** `{{block.assetFolder}}`
- **Limit:** `{{ block.limit ?? blockFamilies[block.limitFamily] }}`<br>
- **Family:** `{{ block.limitFamily }}`

*Source code at: {{block.tsPath}}*