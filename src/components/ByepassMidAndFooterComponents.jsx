import * as React from "react";
import styled from "styled-components";

function ByepassMidAndFooterComponents() {
return (
  <Div>
    <Div2>
      <Div3>
        <Div4>ByePassの購入　またはmopitaへのログイン</Div4>
        <Div5>
          ご利用をご希望の方は、下記の「月額利用登録（入会）　月額275円（税込）」より課金登録
          (入会) を行ってください。
        </Div5>
        <Div6>
          すでにByePassを購入済みの方は、下記の「mopitaにログイン」よりログインを行ってください。
        </Div6>
        <Div7>
          <Div8>ご利用登録に際して</Div8>
          <Div9>お支払方法</Div9>
          <Div10>
            <Div11>
              クレジットカード決済、d払い、auかんたん決済、ソフトバンクまとめて支払い、楽天ペイ
            </Div11>
            <Div12>
              <Div13>
                <Column>
                  <Div14>
                    <Div15>
                      mopita IDに登録した支払方法により異なります。
                    </Div15>
                    <Div16>
                      月額利用登録完了後、直ちにご利用を開始いただけます。
                    </Div16>
                  </Div14>
                </Column>
                <Column2>
                  <Div17>
                    <Div18>お支払時期</Div18>
                    <Div19>サービス提供開始時期</Div19>
                  </Div17>
                </Column2>
              </Div13>
            </Div12>
            <Div20>ご注意事項</Div20>
          </Div10>
          <Div21>
            ・ご利用料金は月単位で発生します。月の途中でのご登録またはご解約となった場合も1か月分のご利用料金をお支払いいただきます。
            <br />
            ・ご解約時点でサービスのご利用は停止されます。
            <br />
            ・お客様事由での返品／キャンセルには対応致しかねます。
          </Div21>
        </Div7>
        <Div22>月額利用登録（入会）　月額275円（税込）</Div22>
        <Div23>mopitaにログイン</Div23>
        <Div24>1ライセンス（1ユーザーで利用可能）</Div24>
      </Div3>
    </Div2>
    
    <Div26>
      <Div27>
        <Div28>
          <Div29>お問い合わせ</Div29>
          <Div30>｜</Div30>
          <Div31>会員解除</Div31>
        </Div28>
        <Div32>
          <Div33>
            <Div34>mopita</Div34>
            <Div35>｜</Div35>
            <Div36>動作環境</Div36>
          </Div33>
          <Div37>機能一覧</Div37>
        </Div32>
      </Div27>
    </Div26>
    <Div25>© 株式会社エムティーアイ</Div25>
  </Div>
);
}

const Div = styled.div`
display: flex;
flex-direction: column;
position: relative;
`;

const Div2 = styled.div`
background-color: rgba(245, 245, 245, 1);
display: flex;
width: 100%;
align-items: center;
justify-content: center;
padding: 40px 60px;
@media (max-width: 991px) {
  max-width: 100%;
  padding: 0 20px;
}
`;

const Div3 = styled.div`
display: flex;
width: 944px;
max-width: 100%;
flex-direction: column;
align-items: center;
`;

const Div4 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
font: 700 17px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div5 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
margin-top: 10px;
font: 400 14px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div6 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
margin-top: 10px;
font: 400 14px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div7 = styled.div`
background-color: rgba(255, 255, 255, 1);
align-self: stretch;
display: flex;
margin-top: 10px;
flex-direction: column;
padding: 19px 0 39px;
border: 2px solid rgba(68, 114, 196, 1);
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div8 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
align-self: center;
font: 700 17px Inter, sans-serif;
`;

const Div9 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
align-self: center;
margin-top: 22px;
font: 400 14px Inter, sans-serif;
`;

const Div10 = styled.div`
display: flex;
margin-top: 19px;
flex-direction: column;
align-items: start;
padding: 0 80px 0 16px;
@media (max-width: 991px) {
  max-width: 100%;
  padding-right: 20px;
}
`;

const Div11 = styled.div`
color: rgba(70, 73, 82, 1);
font: 400 14px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div12 = styled.div`
margin-top: 21px;
width: 526px;
max-width: 100%;
`;

const Div13 = styled.div`
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
width: 72%;
margin-left: 0px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div14 = styled.div`
display: flex;
margin-top: 34px;
flex-grow: 1;
flex-direction: column;
font-size: 14px;
color: rgba(70, 73, 82, 1);
font-weight: 400;
@media (max-width: 991px) {
  margin-top: 40px;
}
`;

const Div15 = styled.div`
font-family: Inter, sans-serif;
`;

const Div16 = styled.div`
font-family: Inter, sans-serif;
margin-top: 53px;
@media (max-width: 991px) {
  margin-top: 40px;
}
`;

const Column2 = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 28%;
margin-left: 20px;
@media (max-width: 991px) {
  width: 100%;
}
`;

const Div17 = styled.div`
display: flex;
flex-direction: column;
font-size: 14px;
color: rgba(70, 73, 82, 1);
font-weight: 400;
white-space: nowrap;
text-align: center;
@media (max-width: 991px) {
  margin-top: 33px;
  white-space: initial;
}
`;

const Div18 = styled.div`
font-family: Inter, sans-serif;
align-self: center;
`;

const Div19 = styled.div`
font-family: Inter, sans-serif;
margin-top: 53px;
@media (max-width: 991px) {
  margin-top: 40px;
}
`;

const Div20 = styled.div`
text-align: center;
color: rgba(70, 73, 82, 1);
align-self: center;
margin-top: 21px;
font: 400 14px Inter, sans-serif;
`;

const Div21 = styled.div`
color: rgba(70, 73, 82, 1);
align-self: start;
margin: 19px 0 0 16px;
font: 400 14px/20px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div22 = styled.div`
border-radius: 8px;
background-color: rgba(177, 37, 42, 1);
margin-top: 10px;
width: 620px;
max-width: 100%;
color: rgba(255, 255, 255, 1);
text-align: center;
padding: 13px 60px 24px;
font: 700 14px/20px Inter, sans-serif;
border: 1px solid rgba(177, 37, 42, 1);
@media (max-width: 991px) {
  padding: 0 20px;
}
`;

const Div23 = styled.div`
border-radius: 8px;
background-color: rgba(177, 37, 42, 1);
margin-top: 10px;
width: 620px;
max-width: 100%;
color: rgba(255, 255, 255, 1);
white-space: nowrap;
text-align: center;
padding: 22px 60px 42px;
font: 700 14px Inter, sans-serif;
border: 1px solid rgba(177, 37, 42, 1);
@media (max-width: 991px) {
  white-space: initial;
  padding: 0 20px;
}
`;

const Div24 = styled.div`
text-align: center;
color: rgba(255, 0, 0, 1);
margin-top: 10px;
font: 400 13px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
}
`;

const Div25 = styled.div`
background-color: rgba(0, 0, 0, 1);
width: 100%;
color: rgba(255, 255, 255, 1);
text-align: center;
padding: 19px 60px 30px;
font: 400 14px Inter, sans-serif;
@media (max-width: 991px) {
  max-width: 100%;
  padding: 0 20px;
}
`;

const Div26 = styled.div`
background-color: rgba(121, 128, 143, 1);
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
font-size: 14px;
color: rgba(255, 255, 255, 1);
font-weight: 400;
white-space: nowrap;
text-align: center;
padding: 19px 60px 0;
@media (max-width: 991px) {
  max-width: 100%;
  white-space: initial;
  padding: 0 20px;
}
`;

const Div27 = styled.div`
display: flex;
width: 180px;
max-width: 100%;
flex-direction: column;
@media (max-width: 991px) {
  white-space: initial;
}
`;

const Div28 = styled.div`
display: flex;
gap: 7px;
@media (max-width: 991px) {
  white-space: initial;
}
`;

const Div29 = styled.div`
font-family: Inter, sans-serif;
flex-grow: 1;
`;

const Div30 = styled.div`
font-family: Inter, sans-serif;
`;

const Div31 = styled.div`
font-family: Inter, sans-serif;
`;

const Div32 = styled.div`
display: flex;
margin-top: 16px;
gap: 14px;
@media (max-width: 991px) {
  white-space: initial;
}
`;

const Div33 = styled.div`
display: flex;
gap: 7px;
@media (max-width: 991px) {
  white-space: initial;
}
`;

const Div34 = styled.div`
flex-grow: 1;
font: 13px Inter, sans-serif;
`;

const Div35 = styled.div`
font-family: Inter, sans-serif;
`;

const Div36 = styled.div`
font-family: Inter, sans-serif;
`;

const Div37 = styled.div`
font-family: Inter, sans-serif;
`;

export default ByepassMidAndFooterComponents;