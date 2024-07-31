"use client"
import * as React from "react";
import styled from "styled-components";

function ByepassBanner() {
  return (
    <Img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b09a4944eb48ab5db6bbed05ec546cbaeae4711293dac967eed4fa82cfab786e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3"
    />
  );
}

const Img = styled.img`
  aspect-ratio: 3.33;
  object-fit: auto;
  object-position: center;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default ByepassBanner;
