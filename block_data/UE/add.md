---
render_with_liquid: false
---

# {{block.displayName}}

Adds two numbers together.

<br><br><br>

### Aliases
{{block.aliases ? `This block goes by the following aliases: ${block.aliases.map(x=>'"'+x+'"').join(', ')}` : 'This block doesn\'t have any aliases'}}

### Stats
- **ID:** `{{block.id}}`
- **In-Game Description:** "{{block.description}}"
- **Asset Folder:** `{{block.assetFolder}}`
- **Limit:** `{{ block.limit ?? blockFamilies[block.limitFamily] ?? '3000 (Default)' }}`<br>
- **Family:** `{{ block.limitFamily ?? 'None' }}`

*Source code at: {{block.tsPath}}*