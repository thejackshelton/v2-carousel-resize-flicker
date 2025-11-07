import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Carousel } from "@qwik-ui/headless";

export default component$(() => {
  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description 3",
    },
  ];
  return (
    <Carousel.Root>
      <Carousel.Scroller>
        {items.map((item) => (
          <Carousel.Slide key={item.id}>
            <div>{item.title}</div>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
    </Carousel.Root>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
