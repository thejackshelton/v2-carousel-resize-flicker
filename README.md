# Reproduction Steps

1. pnpm install
2. pnpm dev
3. at the same height as the item text drag your mouse to the left then let go
4. watch item 2 snap into place
5. open the browser inspector
6. resize the window and notice that the item container stays in place
7. run the v2 migration command `pnpm qwik migrate-v2`
8. repeat the previous steps
9. notice the item now flickers on resize
