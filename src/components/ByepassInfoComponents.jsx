"use client";
import * as React from "react";
import styled from "styled-components";

function ByepassInfoComponents() {
return (
  <Div>
    <Div2>
      ByePassはプラットフォームに依存しない安全なパスワードマネージャです。
      <br />
      デジタルライフを簡単、かつ安全なものにし、オンラインで利用するクレジットカードの情報を保護することもできます。
      <br />
      ハッカーに盗み見される可能性のある危険なウェブブラウザ上での、
      パスワードやクレジットカード番号の入力や保存はもう必要ありません。
    </Div2>
    <div>
      <Div4>
        「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ
      </Div4>
      <Div5>特徴</Div5>
      <Div6>
        シンプルで安全な自動パスワード管理ですべてのデジタルデバイスでパスワード管理プロセスを簡素化します。
        AndroidやiOSでの使用はもちろんWindowsやMacでも利用が可能です。利用端末数に制限もありません。
      </Div6>
    </div>
  </Div>
);
}

const Div = styled.div`
display: flex;
flex-direction: column;
position: relative;
`;

const Div2 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
align-self: center;
margin-top: 26px;
font: 400 17px/24px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div4 = styled.div`
margin-top: 26px;
width: 100%;
color: rgba(255, 69, 0, 1);
white-space: nowrap;
text-align: center;
padding: 4px 60px;
font: 400 14px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
  white-space: initial;
  padding: 0 20px;
}
`;

const Div5 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
margin-top: 26px;
width: 100%;
font: 700 21px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div6 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
margin-top: 42px;
width: 100%;
font: 400 14px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 40px;
}
`;

export default ByepassInfoComponents;