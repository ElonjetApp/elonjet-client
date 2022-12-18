<template>
  <article>
    <n-popup trigger="click" title="Imprint & Privacy">
      <template #trigger>
        <n-button tertiary type="success" class="custom">
          Legal notice
        </n-button>
      </template>
      <article class="imprint-inner">
        <h2>Information according to § 5 TMG (Germany) and DSGVO (EU):</h2>
        <p>
          Conrad, Hiller, Wicke & Wicke GbR
          <br />Grüner Brunnenweg 162
          <br />50827 Köln
        </p>

        <h2>Contact</h2>
        <p>
          E-Mail: maurice@fellow.blue
        </p>

        <h2>Responsible for the content according to 55 para. 2 RStV:</h2>
        <p>
          Conrad, WHiller, Wicke Wicke GbR
          <br />Grüner Brunnenweg 162
          <br />50827 Köln
        </p>
        <h2>Mapbox</h2>
        <h3>What is Mapbox / Mapbox API?</h3>
        <p>
          On our website we use the Mapbox API of the American software company Mapbox Inc, 740 15th Street NW, 5th Floor, District of Columbia 20005, USA. Mapbox is an online mapping tool (open source mapping) that is accessed via an interface (API). By using this tool, your IP address, among other things, is forwarded to Mapbox and stored. In this privacy policy, you will learn more about the features of the tool, why we use it and, most importantly, what data is stored and how you can prevent it.
        </p>
        <p>
          Mapbox is an American software company that provides custom online maps for websites. Mapbox can be used to illustrate content on our website or to graphically show directions, for example. The maps can be very easily integrated into our website using small code snippets (JavaScript code). Among other things, Mapbox offers a mobile-friendly environment, route information is provided in real time and data is displayed in a visualized way.
        </p>
        <h3>Why are we using Mapbox API on our website?</h3>
        <p>
          We also want to offer you a comprehensive service on our website and this should not simply end with our services or products. No, our entire content should also be of use to you. And this includes, for example, maps that show you the way to our company.
        </p>
        <h3>What data is stored by Mapbox API?</h3>
        <p>
          If you call up one of our sub-pages that has an embedded online map from Mapbox, data about your user behavior may be collected and stored. This must be so that the embedded online maps function properly. It may also be that collected data is passed on to third parties by Mapbox, but not personal data. This happens either when it is necessary for legal reasons or when Mapbox explicitly commissions another company to do so. The map content is transmitted directly to your browser and integrated into our website.
        </p>
        <p>
          Mapbox automatically collects certain technical information when requests are made to the APIs. In addition to your IP address, this includes browser information, your operating system, the content of the request, limited location and usage data, the URL of the visited website and the date and time of the website visit. According to Mapbox, the data is only used to improve its own products. In addition, Mapbox also collects randomly generated IDs to analyze user behavior and determine the number of active users.
        </p>
        <p>
          When you use our website and interact with an online map, Mapbox sets the following cookie in your browser:
        </p>
        <p>
          <strong>Name:</strong> ppcbb-enable-content-mapbox_js<br>
          <strong>Value:</strong> 1605795587331671374238-4<br>
          <strong>Purpose:</strong>
          We have not yet been able to find out more detailed information about the purpose of the cookie.<br>
          <strong>Expiry Date:</strong> After one year
        </p>
        <h3>How long and where is data stored?</h3>
        <p>
          The collected data is stored and processed on American servers of the company Mapbox. Your IP address is kept for 30 days for security reasons and then deleted. Randomly generated IDs (no personal data) that analyze the use of the APIs are deleted after 36 months.
        </p>
        <h3>How can I delete my data or prevent data storage?</h3>
        <p>
          If you do not want Mapbox to process data about you or your user behavior, you can disable JavaScript in your browser settings. Of course, you can then also no longer use the corresponding functions to the full extent.</p><p>You have the right to access your personal data at any time and to object to the use and processing. You can manage, delete or disable cookies that may be set by Mapbox API in your browser at any time. However, this may cause the service to stop working completely. For each browser, managing, deleting or disabling cookies works slightly differently. Under the section "Cookies" you will find the corresponding links to the respective instructions of the most popular browsers.
        </p>
          <h3>Legal base</h3>
          <p>If you have consented to allow Mapbox API to be used, the legal basis of the relevant data processing is this consent. According to<strong> Art. 6 para. 1 lit. a DSGVO (Consent)</strong>, this consent constitutes the legal basis for the processing of personal data as it may occur during the collection by Mapbox API.
        </p>
        <p>
          Von unserer Seite besteht zudem ein berechtigtes Interesse, Mapbox API zu verwenden, um unser Online-Service zu optimieren. Die dafür entsprechende Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen Mapbox API gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.
        </p>
        <p>
          Mapbox also processes data in the USA, among other places. We would like to point out that according to the opinion of the European Court of Justice, there is currently no adequate level of protection for the transfer of data to the USA. This may be associated with various risks to the legality and security of data processing.
          This may be accompanied by various risks to the lawfulness and security of data processing.
        </p>
        <p>
          As a basis for data processing with recipients located in third countries (outside the European Union, Iceland, Liechtenstein, Norway, thus in particular in the USA) or a data transfer there, Mapbox uses standard contractual clauses approved by the EU Commission (= Art. 46. para. 2 and 3 DSGVO). These clauses oblige Mapbox to comply with the EU level of data protection when processing relevant data also outside the EU. These clauses are based on an implementing decision of the EU Commission. You can find the decision and the clauses here, among other places: <a href="https://germany.representation.ec.europa.eu/index_de" target="_blank" rel="follow noopener">https://germany.representation.ec.europa.eu/index_de</a>.
        </p>
        <p>
          If you want to learn more about Mapbox's data processing, we recommend that you read the company's privacy policy at: <a href="https://www.mapbox.com/legal/privacy?tid=331671374238" target="_blank" rel="noopener noreferrer">https://www.mapbox.com/legal/privacy</a>.
        </p>
      </article>
    </n-popup>
  </article>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import { NPopup } from 'naive-tools'
</script>

<style scoped lang="scss">
p {
  margin-bottom: 20px;
}
h2 {
  margin: 10px 0;
}
article {
  padding: 0 20px;
  a {
    color: inherit;
  }
  ::v-deep(.trigger-wrapper) {
    width: 100%;
    .n-button {
      width: 100%;
    }
  }
}
.imprint-inner {
  
}
</style>