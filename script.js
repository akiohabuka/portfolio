//変数定義
let slopeA;
let interceptA;
let slopeB;
let interceptB;
let lineChart; 
let firstCost
let deposit

//ボタン
let button = document.getElementById('button');
button.addEventListener('click', simulation);

//シミュレーションの処理
function simulation() {
  console.log("シミュレーションを実行しました");

  //値を取得
  let nameA = document.getElementById('nameA');
  let homeCostA = document.getElementById('homeCostA');
  let homeCostB = document.getElementById('homeCostB');
  let infraCostA = document.getElementById('infraCostA');
  let infraCostB = document.getElementById('infraCostB');
  let foodCostA = document.getElementById('foodCostA');
  let foodCostB = document.getElementById('foodCostB');
  let insCostA = document.getElementById('insCostA');
  let insCostB = document.getElementById('insCostB');

  let homeCostC = document.getElementById('homeCostC');
  let moveCost = document.getElementById('moveCost');
  let insCostC = document.getElementById('insCostC');
  let furnitureCost = document.getElementById('furnitureCost');
  let box1 = document.getElementById('box1');
  let box2 = document.getElementById('box2');

  deposit = Number(homeCostC.value) * 2
  firstCost = Number(moveCost.value) + deposit + Number(furnitureCost.value)
  homeCostSum = Number(homeCostA.value) + Number(homeCostB.value)
  foodCostSum = Number(foodCostA.value) + Number(foodCostB.value)
  foodCostC = (Number(foodCostA.value) + Number(foodCostB.value))*1.7/2
  infraCostSum = Number(infraCostA.value) + Number(infraCostB.value)
  infraCostC = (Number(infraCostA.value) + Number(infraCostB.value))*2.3/2
  insCostSum = Number(insCostA.value) + Number(insCostB.value)
  summaryHomeCost = Number(homeCostC.value) - Number(homeCostSum)
  summaryFoodCost = Number(foodCostC) - Number(foodCostSum)
  summaryInfraCost = Number(infraCostC) - Number(infraCostSum)
  summaryInsCost = (Number(insCostC.value) - Number(insCostSum))/12
  summarySumCost = Number(summaryHomeCost) + Number(summaryFoodCost) + Number(summaryInfraCost) + Number(summaryInsCost)
  summaryTiming = Math.round(-firstCost / summarySumCost)
  function summaryChangeCha(number){
    if(number > 0){
      return number + "円増";
    }else{
      number = -number;
      return number + "円減";
    }
  }

  //初期費用
  document.getElementById('box1').style.backgroundColor = "#E3E3E3";
  document.getElementById('boxtitle1').textContent ="初期費用";
  document.getElementById('outMoveCost').textContent ="引越し代：　" + moveCost.value + "円";
  document.getElementById('outDeposit').textContent ="敷金・礼金：　" + deposit + "円";
  document.getElementById('outFurnitureCost').textContent ="家具・家電購入費：　" + furnitureCost.value + "円";
  document.getElementById('outFirstCost').textContent ="合計：　" + firstCost + "円";

//家賃
document.getElementById('box2').style.backgroundColor = "#E3E3E3";
document.getElementById('boxtitle2').textContent ="家賃";
document.getElementById('outHomeCostA').textContent = nameA.value + "さん:　" + homeCostA.value + "円";
document.getElementById('outHomeCostB').textContent = nameB.value + "さん:　" + homeCostB.value + "円";
document.getElementById('outHomeCostSum').textContent ="同棲前　" +homeCostSum + "円";
document.getElementById('outHomeCostC').textContent ="同棲後：　" + homeCostC.value + "円";

  //食費
  document.getElementById('box3').style.backgroundColor = "#E3E3E3";
  document.getElementById('boxtitle3').textContent ="食費";
  document.getElementById('outFoodCostA').textContent = nameA.value + "さん:　" + foodCostA.value + "円";
  document.getElementById('outFoodCostB').textContent = nameB.value + "さん:　" + foodCostB.value + "円";
  document.getElementById('outFoodCostSum').textContent ="同棲前　" +foodCostSum + "円";
  document.getElementById('outFoodCostC').textContent ="同棲後：　" + foodCostC + "円";

  

    //光熱費
    document.getElementById('box4').style.backgroundColor = "#E3E3E3";
    document.getElementById('boxtitle4').textContent ="光熱費";
    document.getElementById('outInfraCostA').textContent = nameA.value + "さん:　" + infraCostA.value + "円";
    document.getElementById('outInfraCostB').textContent = nameB.value + "さん:　" + infraCostB.value + "円";
    document.getElementById('outInfraCostSum').textContent ="同棲前　" +infraCostSum + "円";
    document.getElementById('outInfraCostC').textContent ="同棲後：　" + infraCostC + "円";

        //光熱費
        document.getElementById('box5').style.backgroundColor = "#E3E3E3";
        document.getElementById('boxtitle5').textContent ="火災保険費";
        document.getElementById('outInsCostA').textContent = nameA.value + "さん:　" + insCostA.value + "円";
        document.getElementById('outInsCostB').textContent = nameB.value + "さん:　" + insCostB.value + "円";
        document.getElementById('outInsCostSum').textContent ="同棲前　" +insCostSum + "円";
        document.getElementById('outInsCostC').textContent ="同棲後：　" + insCostC.value + "円";


{/* <li class="summaryli" id="summaryHomeCost">家賃は1月辺り10000円減です</li>
        <li class="summaryli" id="summaryFoodCost">食費は1月辺り10000円減です</li>
        <li class="summaryli" id="summaryInfraCostSum">光熱費は1月辺り10000円減です</li>
        <li class="summaryli" id="summaryInsCost">火災保険は1月辺り10000円減です</li>
        document.getElementById('summarySumCost').textContent = "hello";
        <br>

"合計は1月辺り" + summaryChangeCha(summarySumCost) + "です"

        <li class="summaryli" id="summarySumCost">合計は1月辺り10000円減です</li>
        <li class="summaryli" id="summaryTiming">同棲後、黒字になるのはーーです。</li> */}



  //まとめ
  document.getElementById('summary').style.backgroundColor = "#E3E3E3";
  document.getElementById('summarytitle').textContent ="まとめ";
  document.getElementById('summaryHomeCost').textContent = "家賃は1月あたり" + summaryChangeCha(summaryHomeCost) + "です";
  document.getElementById('summaryFoodCost').textContent = "食費は1月あたり" + summaryChangeCha(summaryFoodCost) + "です";
  document.getElementById('summaryInfraCost').textContent = "光熱費は1月あたり" + summaryChangeCha(summaryInfraCost) + "です";
  document.getElementById('summaryInsCost').textContent = "火災保険は1月あたり" + summaryChangeCha(summaryInsCost) + "です";
  document.getElementById('summarySumCost').textContent = "合計1月あたり" + summaryChangeCha(summarySumCost) + "です";
  document.getElementById('summaryTiming').textContent = "同棲後、黒字になるのは" + summaryTiming + "ヶ月後です";

  //傾きと切片の計算
  slopeA = Number(homeCostA.value) + Number(homeCostB.value) + Number(infraCostA.value) + Number(infraCostB.value) + Number(foodCostA.value) + Number(foodCostB.value) + Number(insCostA.value) / 12 + Number(insCostB.value) / 12;
  interceptA = 0;
  slopeB = Number(homeCostC.value) + (Number(infraCostA.value) + Number(infraCostB.value))*2.3/2 + (Number(foodCostA.value) + Number(foodCostB.value))*1.7/2 + Number(insCostC.value) / 12;
  interceptB = Number(moveCost.value) + Number(furnitureCost.value) + Number(homeCostC.value) *2;

  // グラフの設定
  let lineCtx = document.getElementById("lineChart");
  let lineConfig = {
    type: 'line',
    data: {
      labels: ['0', '1年目', '2年目', '3年目', '4年目'],
      datasets: [{
        label: '同棲前',
        data: [interceptA, slopeA * 12, slopeA * 24, slopeA * 36, slopeA * 48],
        borderColor: '#f88',
      }, {
        label: '同棲後',
        data: [interceptB, interceptB + slopeB * 12, interceptB + slopeB * 24, interceptB + slopeB * 36, interceptB + slopeB * 48],
        borderColor: '#484',
      }],
    },
    options: {
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 60,
          ticks: {
            stepSize: 20,
          }
        }
      },
    },
  };

  // グラフを生成
  if (lineChart) {
    lineChart.destroy(); // 前のグラフが存在する場合は破棄
  }
  lineChart = new Chart(lineCtx, lineConfig);
  lineChart.canvas.parentNode.style.width = '900px'; // 幅を400pxに設定
  lineChart.canvas.parentNode.style.height = '1000px'; // 高さを400pxに設定
  lineChart.resize(); // サイズを変更


  
}