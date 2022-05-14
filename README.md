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
&#x2022;Gönderici ve alıcı hesap numaraları geçerli olmalıdır.</br>
&#x2022;Gönderici yeterli bakiyeye sahip olmalıdır.</br>
&#x2022;Tüm şartlar sağlanırsa Success mesajı response olarak döner.</br>

<h4>Transfer Geçmişi Doğrulamaları</h4>
&#x2022;Geçerli bir hesap numarası girilmelidir.</br>
&#x2022;Eğer daha önce transfer işlemi yapıldıysa transfer işlemleri response olarak döner aksi halde boş bir object döner.</br>
&#x2022;Hesap numarası geçersizse 400 bad request kodu ile işlem sonlanır.</br></br>

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
