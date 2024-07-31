import * as React from "react";
import styled from "styled-components";

function ByepassServiceInfoComponents() {
return (
  <Div>
    <Div2>
      <Div3>
        <Column>
          <Div4>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58c86945029243f323e07618647dcd3a2429f264a7c383767b8aa2c778c3fc41?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3"
            />
            <Div5>パスワードを安全に保存</Div5>
            <Div6>
              暗号化を使用して、パスワードを安全に保存。入力などの際に必要に応じ
              <br />
              て呼び出せます。
            </Div6>
          </Div4>
        </Column>
        <Column2>
          <Div7>
            <Div8>
              <Column3>
                <Div9>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/89aca35a286ecbe1cd0e06b9569864bcb0c1d40e64599b145bc769b033c38d0e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3"
                  />
                  <Div10>カード情報を暗号化</Div10>
                  <Div11>
                    クレジットカードデータも暗号化します。暗号化すると、第三者がアクセ
                    <br />
                    スしたり、保存することができません。
                  </Div11>
                </Div9>
              </Column3>
              <Column4>
                <Div12>
                  <Img3
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/86894aaa9dd4a1f5ecc92368eacb277152e5c2dd836c79a2f5c056b56dbe644a?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3"
                  />
                  <Div13>オートフィル機能</Div13>
                  <Div14>
                    ByePassにIDやパスワードを記憶させると、次回から入力する手間がなく
                    <br />
                    なります。
                  </Div14>
                </Div12>
              </Column4>
            </Div8>
          </Div7>
        </Column2>
      </Div3>
    </Div2>
    <Div15>
      <Div16>
        <div>
          <Div17>
            <Img4
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b343e918cf3a6994eac2b2ce4bd7b742023cb77ab1ff09c3f240c9b0b82d3af1?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3"
            />
            <Div18>漏洩したパスワードの確認</Div18>
            <Div19>
              ハッカーが共有するリスト「ダークウェブ」にあなたのパスワードがある
              <br />
              かどうかを確認し、存在した場合はByePass内でパスワードを変更しま
              <br />
              す。
            </Div19>
          </Div17>
        </div>
        <Column6>
          <Div20>
            <Img5
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/056cc509f9c243f07479766c29f9e8497e5cabed7ed858dd4dc8ab68ab230434?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3"
            />
            <Div21>強力なパスワードを提案</Div21>
            <Div22>
              あなたの情報をサイバー攻撃から守るために、セキュリティレベルの高い
              <br />
              パスワードを自動的に提案します。
            </Div22>
          </Div20>
        </Column6>
        <Column7>
          <Div23>
            <Img6
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d397cb85efab9aad74598ab39a7d42f48276a7f06ee8f91c328c095b48c0e3e?apiKey=6d2fa06cce744f22a1e3f36901f6ddf3&&apiKey=6d2fa06cce744f22a1e3f36901f6ddf3"
            />
            <Div24>メモも安全に保管</Div24>
            <Div25>
              個人的なメモや銀行口座番号やPINなどの機密データも、端末上で暗号化
              <br />
              し安全に保存できます。
            </Div25>
          </Div23>
        </Column7>
      </Div16>
    </Div15>
    <Div26 />
  </Div>
);
}

const Div = styled.div`
background-color: rgba(225, 216, 216, 1);
display: flex;
margin-top: 46px;
width: 100%;
padding-top: 40px;
flex-direction: column;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 40px;
}
`;

const Div2 = styled.div`
width: 100%;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div3 = styled.div`
gap: 20px;
display: flex;
@media (max-width: 991px) {
  flex-direction: column;
  align-items: stretch;
  gap: 0px;
}
`;

const Column = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 33%;
margin-left: 0px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div4 = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
align-items: center;
font-size: 14px;
color: rgba(70, 73, 82, 1);
white-space: nowrap;
text-align: center;
margin: auto 0;
padding: 0 20px;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 29px;
  white-space: initial;
}
`;

const Img = styled.img`
aspect-ratio: 1;
object-fit: auto;
object-position: center;
width: 150px;
max-width: 100%;
`;

const Div5 = styled.div`
font-family: Inter, sans-serif;
font-weight: 700;
margin-top: 19px;
`;

const Div6 = styled.div`
font-family: Inter, sans-serif;
font-weight: 400;
line-height: 20px;
align-self: stretch;
margin-top: 17px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Column2 = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 67%;
margin-left: 20px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div7 = styled.div`
flex-grow: 1;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 24px;
}
`;

const Div8 = styled.div`
gap: 20px;
display: flex;
@media (max-width: 991px) {
  flex-direction: column;
  align-items: stretch;
  gap: 0px;
}
`;

const Column3 = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 50%;
margin-left: 0px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div9 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 14px;
color: rgba(70, 73, 82, 1);
white-space: nowrap;
text-align: center;
padding: 0 20px;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 12px;
  white-space: initial;
}
`;

const Div10 = styled.div`
font-family: Inter, sans-serif;
font-weight: 700;
margin-top: 19px;
`;

const Div11 = styled.div`
font-family: Inter, sans-serif;
font-weight: 400;
line-height: 20px;
align-self: stretch;
margin-top: 17px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Column4 = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 50%;
margin-left: 20px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div12 = styled.div`
display: flex;
margin-top: 5px;
flex-grow: 1;
flex-direction: column;
font-size: 14px;
color: rgba(70, 73, 82, 1);
white-space: nowrap;
text-align: center;
padding: 0 20px;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 17px;
  white-space: initial;
}
`;

const Img3 = styled.img`
aspect-ratio: 1;
object-fit: auto;
object-position: center;
width: 150px;
align-self: center;
max-width: 100%;
`;

const Div13 = styled.div`
font-family: Inter, sans-serif;
font-weight: 700;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div14 = styled.div`
font-family: Inter, sans-serif;
font-weight: 400;
line-height: 20px;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div15 = styled.div`
margin-top: 65px;
width: 100%;
padding: 0 20px;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 40px;
}
`;

const Div16 = styled.div`
gap: 20px;
display: flex;
@media (max-width: 991px) {
  flex-direction: column;
  align-items: stretch;
  gap: 0px;
}
`;

const Div17 = styled.div`
display: flex;
flex-direction: column;
font-size: 14px;
color: rgba(70, 73, 82, 1);
white-space: nowrap;
text-align: center;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 17px;
  white-space: initial;
}
`;

const Img4 = styled.img`
aspect-ratio: 1;
object-fit: auto;
object-position: center;
width: 150px;
align-self: center;
max-width: 100%;
`;

const Div18 = styled.div`
font-family: Inter, sans-serif;
font-weight: 700;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div19 = styled.div`
font-family: Inter, sans-serif;
font-weight: 400;
line-height: 20px;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Column6 = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 33%;
margin-left: 20px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div20 = styled.div`
display: flex;
margin-top: 20px;
flex-direction: column;
font-size: 14px;
color: rgba(70, 73, 82, 1);
white-space: nowrap;
text-align: center;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 37px;
  white-space: initial;
}
`;

const Img5 = styled.img`
aspect-ratio: 1;
object-fit: auto;
object-position: center;
width: 150px;
align-self: center;
max-width: 100%;
`;

const Div21 = styled.div`
font-family: Inter, sans-serif;
font-weight: 700;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div22 = styled.div`
font-family: Inter, sans-serif;
font-weight: 400;
line-height: 20px;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Column7 = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 33%;
margin-left: 20px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div23 = styled.div`
display: flex;
margin-top: 25px;
flex-grow: 1;
flex-direction: column;
font-size: 14px;
color: rgba(70, 73, 82, 1);
white-space: nowrap;
text-align: center;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 40px;
  white-space: initial;
}
`;

const Img6 = styled.img`
aspect-ratio: 1;
object-fit: auto;
object-position: center;
width: 150px;
align-self: center;
max-width: 100%;
`;

const Div24 = styled.div`
font-family: Inter, sans-serif;
font-weight: 700;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div25 = styled.div`
font-family: Inter, sans-serif;
font-weight: 400;
line-height: 20px;
margin-top: 13px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div26 = styled.div`
background-color: rgba(217, 217, 217, 1);
min-height: 6px;
margin-top: 78px;
width: 100%;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 40px;
}
`;

export default ByepassServiceInfoComponents;