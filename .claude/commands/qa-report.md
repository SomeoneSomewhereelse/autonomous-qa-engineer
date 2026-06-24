# /qa-report — Recursively scan the project folder for JavaScript files containing uncommented functions.

## Output format
A single markdown file named `QA_REPORT.md` written to the `diagnostics/` subfolder.

## Rules
- Find `function` declarations and arrow function assignments (`const foo = () =>`, `const foo = function`) that are not immediately preceded by a single-line (`//`) or multi-line (`/* */`) comment on the line directly above.
- First line of the report is a `# QA Report (YYYY-MM-DD)` header using the current date.
- For each file with findings, add a `##` section containing the full path to the file.
- Under each file section, list each violation: line number and the function definition line.
- If all functions in the project are properly commented, write a single `## ✓ Clean` section with the message: "All functions have comments."
- If no `.js` files are found, write: "No JavaScript files found in project."
- Create the `diagnostics/` folder if it does not exist.
