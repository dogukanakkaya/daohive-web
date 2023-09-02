import { asset } from "$fresh/runtime.ts";

export default function Features() {
  return (
    <section class="mt-20 grid grid-cols-2 gap-20">
      <div>
        <img
          src={asset("/temp-home-left.png")}
          class="w-full h-[500px] object-cover rounded-xl mb-4"
          alt=""
        />
        <h2 class="text-xl text-white font-semibold">
          Add Proposals
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          molestias sed quis maiores ipsa similique dolores quidem illo
          accusamus minima repudiandae quae itaque est consequuntur cumque
          dolor, quisquam velit quo!
        </p>
      </div>
      <div class="mt-40">
        <img
          src={asset("/temp-home-right.png")}
          class="w-full h-[500px] object-cover rounded-xl mb-4"
          alt=""
        />
        <h2 class="text-xl text-white font-semibold">
          Manage Smart Contracts
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          molestias sed quis maiores ipsa similique dolores quidem illo
          accusamus minima repudiandae quae itaque est consequuntur cumque
          dolor, quisquam velit quo!
        </p>
      </div>
      <div>
        <img
          src={asset("/temp-home-left.png")}
          class="w-full h-[500px] object-cover rounded-xl mb-4"
          alt=""
        />
        <h2 class="text-xl text-white font-semibold">
          Add Proposals
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          molestias sed quis maiores ipsa similique dolores quidem illo
          accusamus minima repudiandae quae itaque est consequuntur cumque
          dolor, quisquam velit quo!
        </p>
      </div>
      <div class="mt-40">
        <img
          src={asset("/temp-home-right.png")}
          class="w-full h-[500px] object-cover rounded-xl mb-4"
          alt=""
        />
        <h2 class="text-xl text-white font-semibold">
          Manage Smart Contracts
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          molestias sed quis maiores ipsa similique dolores quidem illo
          accusamus minima repudiandae quae itaque est consequuntur cumque
          dolor, quisquam velit quo!
        </p>
      </div>
    </section>
  );
}
