---
name: Writing Project Change Blogs
description: Guidelines for researching recent work on this platform and turning that into publishable blog posts.
---

# Writing Project Change Blogs

This skill outlines the process for researching recent repository changes and drafting technical blog posts about them for this site.

## When to Use This Skill
- The user requests a new blog summarizing recent commits, a migration, or a specific new feature.

## Guidelines

### 1. Research Phase
- **Commits & Diffs**: Start by investigating the recent commit history (`git log`) and branch diffs (`git diff`) relevant to the change requested by the user.
- **Code Patterns**: Identify the specific code patterns, libraries, dependencies, or architectural adjustments that were introduced or removed. Look at configuration files (like `vite.config.ts`, `package.json`) as well as source files.
- **Understand the "Why"**: Don't just list changes. Determine the *reason* for the change. Was it a dependency bump? A migration to a new paradigm (e.g., SSG to CSR, React hooks to Kiru closures)? 
- **Verify with Official Documentation**: Always cross-reference the changes with official documentation for the tools being used (e.g., `https://kirujs.dev`). Ensure that any technical claims or explanations of new concepts are completely accurate according to the maintainers.

### 2. Drafting the Blog Post
- **Location**: Write the new blog post inside `content/posts/` as an `.mdx` file.
- **Frontmatter**: Ensure the file contains `title`, `summary`, and `date` in the YAML frontmatter. Remember that the `content-collections` schema determines the URL slug directly from the `title`, so choose a concise, accurate title.
- **Structure**:
    - **Introduction**: Briefly explain the context of the change.
    - **Technical Breakdown**: Group the changes into logical sections. Use clear headings.
    - **Code Snippets**: Use before-and-after code snippets to clearly illustrate the shift in paradigms or APIs. Keep snippets focused and exclude irrelevant code.
    - **Links**: Embed markdown links to the specific, relevant documentation pages for any new APIs, libraries, or concepts introduced.

### 3. Review and Verification
- **Build Check**: ALWAYS run `bun run build` after drafting or heavily modifying the `.mdx` file. `content-collections` will fail the build if there are frontmatter parsing issues or invalid JSX inside the MDX.
- **Preview**: If possible, spin up the dev server (`bun run dev`) and utilize a browser preview to ensure view transitions and dynamic routes render the new post correctly.

### 4. Finalizing
- Create a new branch outlining the work (e.g., `feat/kiru-v1-blog`).
- Stage, commit, and push the branch.
- Use the `gh pr create` command to open a Pull Request with a summary of the blog post and verification steps.
