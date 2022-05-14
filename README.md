Transactions - API

Turkish 

<h4>Hesap Oluşturma Doğrulamaları</h4>
&#x2022;Hesap numarası sadece rakamlardan oluşmalıdır.</br>
&#x2022;Para birimi TRY,EUR veya USD olabilir.</br>
&#x2022;Hesap tipi individual veya corporate olabilir.</br>
&#x2022;Bu doğrulamalar sağlanmazsa 400 Bad Request ve 'Failed' hata mesajı döner.</br>

<h4>Hesap Bilgisi Doğrulamaları</h4>
&#x2022;Girilen hesap numarası daha önce oluşturulmamışsa hata mesajı döner.</br>

<h4>Para Yatırma Doğrulamaları</h4>
&#x2022;Geçerli bir hesap numarası girilmelidir.</br>
&#x2022;İşlem başarılı olursa hesabınızın yeni bakiyesi response olarak dönecektir.</br>

<h4>Para Çekme Doğrulamaları</h4>
&#x2022;Geçerli bir hesap numarası girilmelidir.</br>
&#x2022;Hesap yeterli bakiyeye sahip olmalıdır.</br>
&#x2022;İşlem başarılı olursa yeni bakiye response olarak döner, başarısız olursa 400 status kodu döner.</br>

<h4>Hesaptan Hesaba Para Transferi Doğrulamaları</h4>
&#x2022;Gönderici yeterli bakiyeye sahip olmalıdır.</br>
&#x2022;Gönderici ve alıcı hesap farklı olmalıdır.</br>
&#x2022;Gönderici ve alıcı hesap numaraları geçerli olmalıdır.</br>
&#x2022;Tüm şartlar sağlanırsa Success mesajı response olarak döner.</br>

<h4>Transfer Geçmişi Doğrulamaları</h4>
&#x2022;Geçerli bir hesap numarası girilmelidir.</br>
&#x2022;Eğer daha önce transfer işlemi yapıldıysa transfer işlemleri response olarak döner aksi halde boş bir object döner.</br>
&#x2022;Hesap numarası geçersiz ise 400 bad request kodu ile işlem sonlanır.</br></br>

<p><code>Hesap oluşturma</code> örnek request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/account</code></td>
<td>{
    "accountNumber":"123",
    "currencyCode":"TRY",
    "ownerName":"Ornek İsim",
    "accountType":"individual"
}</td>
</tr>
</tbody>
</table>
<p><code>Hesap Bilgileri</code> örnek request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>GET</code></td>
<td><code>http://localhost:5050/account/123</code></td>
<td>{
  {accountNumber:accountNumber,currencyCode:currencyCode,ownerName:ownerName,accountType:accountType,balance:0.00}
}</td>
</tr>
</tbody>
</table>
<p><code>Para Yatırma</code> örnek request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/deposit</code></td>
<td>{
  {
    "accountNumber":"123",
    "amount":15
}
}</td>
</tr>
</tbody>
</table>
<p><code>Para Çekme</code> örnek request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/withdraw</code></td>
<td>{
{
    "accountNumber":"123",
    "amount":5
}
}</td>
</tr>
</tbody>
</table>
<p><code>Hesaptan Hesaba Para Transferi</code> örnek request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/payment</code></td>
<td>{
{
    "senderAccount":"1234",
    "receiverAccount":"123",
    "amount":5
}
}</td>
</tr>
</tbody>
</table>
<p><code>Transfer Geçmişi</code> örnek request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>GET</code></td>
<td><code>http://localhost:5050/accounting/123</code></td>
<td>{
  "accountNumber":123,"date":createdAt,"transactionType":type,"amount":account.amount
}</td>
</tr>
</tbody>
</table>

<h2 dir="auto"><a id="user-content-how-to-run-the-project" class="anchor" aria-hidden="true" href="#how-to-run-the-project"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Projeyi nasıl çalıştırabilirim?</h2>
<p dir="auto">Projeyi çalıştırmadan önce,<a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> bilgisayarınızda kurulu olmalıdır.<br>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="# Clone this repository                             $ http://localhost:3333/users"><pre><span class="pl-c"><span class="pl-c">#</span> Bu depoyu klonla </span>

 git clone https://github.com/yemredogru/tringle

<span class="pl-c"><span class="pl-c">#</span> Projeye terminalden erişim sağlama.</span>
 <span class="pl-c1">cd</span> tringle

<span class="pl-c"><span class="pl-c">#</span> Bağımlılıkları yükle</span>
npm install

<span class="pl-c"><span class="pl-c">#</span> Çalıştır</span>
npm start

<span class="pl-c"><span class="pl-c">#</span> Test'i Çalıştır</span>
npm test

</div>
   
<h2 dir="auto"><a id="user-content-how-to-run-the-project" class="anchor" aria-hidden="true" href="#how-to-run-the-project"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Projeyi Docker üzerinden nasıl çalıştırabilirim?</h2>
<p dir="auto">Projeyi çalıştırmadan önce,<a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> ve <a href="https://docs.docker.com/desktop/" rel="nofollow">Docker</a> bilgisayarınızda kurulu olmalıdır.<br>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="# Clone this repository                             $ http://localhost:3333/users"><pre><span class="pl-c"><span class="pl-c">#</span> Bu depoyu klonla </span>

 git clone https://github.com/yemredogru/tringle

<span class="pl-c"><span class="pl-c">#</span> Projeye terminalden erişim sağlama.</span>
 <span class="pl-c1">cd</span> tringle

<span class="pl-c"><span class="pl-c">#</span> Docker Image hazırlama</span>
 docker build --tag node-tringle  .

<span class="pl-c"><span class="pl-c">#</span> Çalıştır</span>
docker run -p 5050:5050  node-tringle

</div>
</br>
</br>
<hr/>
</br>
</br>


English


To run the project, type the npm install command in Terminal.</br>
After the installations are completed successfully, you can run the project with the npm start command.</br>
You can see the result of the test by typing npm test to run the test.</br>

<h4>Account Creation Verifications</h4>
&#x2022;Account number must consist of numbers only.</br>
&#x2022;Currency can be TRY, EUR or USD.</br>
&#x2022;Account type can be individual or corporate.</br>
&#x2022;If these validations are not provided, a 400 Bad Request and 'Failed' error message will be returned.</br>

<h4>Account Information Verifications</h4>
&#x2022;If the entered account number has not been created before, an error message is returned.</br>

<h4>Deposit Verifications</h4>
&#x2022;A valid account number must be entered.</br>
&#x2022;If the transaction is successful, the new balance of your account will be returned as a response.</br>

<h4>Withdrawal Verifications</h4>
&#x2022;A valid account number must be entered.</br>
&#x2022;The account must have sufficient balance.</br>
&#x2022;If the transaction is successful, the new balance is returned as a response, if it fails, the 400 status code is returned.</br>

<h4>Account-to-Account Money Transfer Verifications</h4>
&#x2022;The sender must have sufficient balance.</br>
&#x2022;The sending and receiving account must be different.</br>
&#x2022;Sender and recipient account numbers must be valid.</br>
&#x2022;If all conditions are met, the Success message is returned as a response.</br>

<h4>Transfer History Verifications</h4>
&#x2022;A valid account number must be entered.</br>
&#x2022;If the transfer operation has been done before, the transfer operations will return as response, otherwise an empty object will be returned.</br>
&#x2022;If the account number is invalid, the process ends with a 400 bad request code.</br></br>

<p><code>Account creation</code> sample request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/account</code></td>
<td>{
    "accountNumber":"123",
    "currencyCode":"TRY",
    "ownerName":"Ornek İsim",
    "accountType":"individual"
}</td>
</tr>
</tbody>
</table>
<p><code>Account info</code> sample request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>GET</code></td>
<td><code>http://localhost:5050/account/123</code></td>
<td>{
  {accountNumber:accountNumber,currencyCode:currencyCode,ownerName:ownerName,accountType:accountType,balance:0.00}
}</td>
</tr>
</tbody>
</table>
<p><code>Deposit</code> sample request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/deposit</code></td>
<td>{
  {
    "accountNumber":"123",
    "amount":15
}
}</td>
</tr>
</tbody>
</table>
<p><code>Withdraw money</code> sample request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/withdraw</code></td>
<td>{
{
    "accountNumber":"123",
    "amount":5
}
}</td>
</tr>
</tbody>
</table>
<p><code>Account to Account Money Transfer</code> sample request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Body</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>POST</code></td>
<td><code>http://localhost:5050/payment</code></td>
<td>{
{
    "senderAccount":"1234",
    "receiverAccount":"123",
    "amount":5
}
}</td>
</tr>
</tbody>
</table>
<p><code>Transfer History</code> sample request</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Request URI</th>
<th>Response</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>GET</code></td>
<td><code>http://localhost:5050/accounting/123</code></td>
<td>{
  "accountNumber":123,"date":createdAt,"transactionType":type,"amount":account.amount
}</td>
</tr>
</tbody>
</table>

<h2 dir="auto"><a id="user-content-how-to-run-the-project" class="anchor" aria-hidden="true" href="#how-to-run-the-project"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>How can I run the project?</h2>
<p dir="auto">Before running the project,<a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> must be installed on your computer.<br>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="# Clone this repository                             $ http://localhost:3333/users"><pre><span class="pl-c"><span class="pl-c">#</span> Clone this repository </span>

 git clone https://github.com/yemredogru/tringle

<span class="pl-c"><span class="pl-c">#</span> Access the repository on your terminal.</span>
 <span class="pl-c1">cd</span> tringle

<span class="pl-c"><span class="pl-c">#</span> Install dependencies</span>
npm install

<span class="pl-c"><span class="pl-c">#</span> Run</span>
npm start

<span class="pl-c"><span class="pl-c">#</span> Run Test</span>
npm test

</div>
    
   <h2 dir="auto"><a id="user-content-how-to-run-the-project" class="anchor" aria-hidden="true" href="#how-to-run-the-project"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Projeyi Docker üzerinden nasıl çalıştırabilirim?</h2>
<p dir="auto">Before running the project,<a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> and <a href="https://docs.docker.com/desktop/" rel="nofollow">Docker</a> must be installed on your computer.<br>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="# Clone this repository                             $ http://localhost:3333/users"><pre><span class="pl-c"><span class="pl-c">#</span> Clone this repository </span>

 git clone https://github.com/yemredogru/tringle

<span class="pl-c"><span class="pl-c">#</span> Access the repository on your terminal.</span>
 <span class="pl-c1">cd</span> tringle

<span class="pl-c"><span class="pl-c">#</span> Prepare a Docker Image</span>
 docker build --tag node-tringle  .

<span class="pl-c"><span class="pl-c">#</span> Run</span>
docker run -p 5050:5050  node-tringle

</div>
    
