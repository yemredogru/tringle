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

</br>
</br>
<hr/>
</br>
</br>
English


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


