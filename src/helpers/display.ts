export const displayMessage = (msg: any, off: any) => {
  // $(`
  // <style>
  //   .wrapper {
  //       background:white;
  //       width:100%;
  //       height:100vh;
  //       position:absolute;
  //       z-index:999;
  //       top:0;
  //       left:0;
  //       display:-webkit-box;
  //       display:-ms-flexbox;
  //       display:flex;
  //       -webkit-box-orient:vertical;
  //       -webkit-box-direction:normal;
  //           -ms-flex-direction:column;
  //               flex-direction:column;
  //   }
  //   .wrapper::after {
  //       content: "";
  //       position:absolute;
  //       top:0;
  //       left:0;
  //       width:100%;
  //       height:10px;
  //       background:red;
  //   }
  //   .wrapper > * {
  //       color: red;
  //       font-size:20px;
  //       padding: 0 20px;
  //       font-weight:bold;
  //       text-align:center;
  //       margin-bottom:10px;
  //       list-style:none;
  //   }
  // </style>
  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
  // `).appendTo("head");
  // console.log(msg);
  // $("body").append(`
  // <div class="wrapper">
  //   <h2>Element koji se prati ima ID: ${off.followItem}</h2>
  //   <h3>Problematicna rezolucija:<br> w: ${off.width}, h: ${off.height} </h3>
  //   <p>Problematicni elementi:</p>
  //   <ul>
  //       ${msg.map(
  //         (m: { nodeName: string; id: any; className: string }) =>
  //           `<li><p>Detaljnije o elementu:</p>
  //        <ul>
  //           <li>Tag: ${m.nodeName}</li>
  //           <li>Id: ${m.id}</li>
  //           <li>Class: ${m.className}</li>
  //        </ul>
  //       </li>`
  //       )}
  //   </ul>
  // </div>
  // `);
};
