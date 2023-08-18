"use client";

import { useEffect, useRef, useState } from "react";

function handlePromiseStatus(promise: any) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result: any) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason: any) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

async function getData() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return true;
}

let cache = new Map();

function fetchData(id = Date.now()) {
  if (!cache.has(id)) {
    cache.set(id, getData());
  }

  return cache.get(id);
}

export default function TodoViews() {
  const result = handlePromiseStatus(fetchData(1));

  console.log("result", result);

  const [isReady, setIsReady] = useState(false);
  const [canShow, setCanShow] = useState(result);
  const refBt = useRef(null);

  useEffect(() => {
    console.log("refBt", refBt, canShow);

    if (canShow) {
      setIsReady(true);
    }
  }, [canShow]);

  return (
    <>
      {isReady && (
        <button
          ref={refBt}
          type="button"
          onClick={() => {
            console.log("clicked", canShow);
            setCanShow(!canShow);
          }}
        >
          {canShow && "OI"}
          Click
        </button>
      )}
    </>
  );
}
