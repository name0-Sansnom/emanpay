import React from "react";
import './faq.css'
import { Container, Accordion } from "react-bootstrap";

const Faq = () => {
  return (

    <Container style={{marginTop:'4rem'}}>
      <h3>Do you have any concern</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Why everyone should bank the Islamic way?
          </Accordion.Header>
          <Accordion.Body>
            The traditional banking preconceives that money can grow
            independently of any real assets and resources backing its growth;
            it can grow based on the "promise of permanent success in the
            future". <br/>The assumption is basically that "if the Earth is done and
            finished, there will be Mars to venture on and to continue backing
            interest payments".<br/> The global debt has risen from $226 trillion in
            2020 to $303 trillion in 2021. Mars might not be enough soon, and
            until it is also finished, the interest payments will obviously
            amount to much more. <br/>Another problem is that this venture, the risk
            of it all, is almost entirely transferred by the financial
            institutions to those who are doing the extraction and processing of
            the resources, i.e. the real work. <br/>The banks say: "We'll give you
            the money that does not exist; we will do nothing; you venture, but
            if you fail we'll take everything from you, plus more than you have.
            All risks are yours; if we inflate it too much, your taxes will
            cover it".<br/> In a nutshell, Islamic banking defies both these
            assumptions: resources are limited and should be treated carefully,
            money can't be created out of bubble promises, and the risk is
            always shared by the parties involved.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>When is Emanpay launching</Accordion.Header>
          <Accordion.Body>
            Late 2023 or early 2024. Support us on Social Media, join our
            community and share your thoughts. It will help us to launch faster.
            And we hope, in sha' Llah, promoting fair money usage will become a
            continuous sadaka for you.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Where will Emanpay be launching</Accordion.Header>
          <Accordion.Body>
            We are launcing in the UK first, then expanding our service to the
            continental Europe, then South East Asia, then other Muslim and high
            Muslim presence countries. In sha' Llah
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How is Emanpay gonna make money?</Accordion.Header>
          <Accordion.Body>
            Again, your support is crucial. In addition to a Free Plan,
            Subscriptions will be our main revenue stream. The other revenue
            stream comes from partnering and sharing revenue with other Halal
            Businesses and projects.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How is Emanpay going to fulfil the promise of quality?
          </Accordion.Header>
          <Accordion.Body>
            Part of our team are former developers of Fintech giants, such as
            Revolut, Raiffeisen and other.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Does Yoosr avoid working with interest-based banks?
          </Accordion.Header>
          <Accordion.Body>
            The closest we are to the banks is the following: <br />
            a) Working with so called BaaS (Banking as a Service) providers.
            However, they don’t earn from credit, their revenue is based on fees
            for providing legal and technological infrastructure. It’s like
            renting an office in a building where a bank also rents it. Not
            forbidden per se, but could be avoided.
            <br /> b) Allowing Bank transfers from and to traditional banks.{" "}
            <br />
            c) Using fiat money which is, in the modern world, literally debt
            obligations.
            <br /> The most difficult one. BUT we are tackling all three issues:
            <br /> a) We are going to apply for fintech licenses in the
            countries we operate in, which will allow us to built our own
            infrastructure. We’ll built first Muslim BaaS, which will be used
            for launching other credit-free products, in sha' Llah.
            <br /> b) The more support we get from you, the more Muslims use our
            product, the less interabank transfers will be required. So it’s our
            collective responsibility to make transfers to credit-based banks
            less required. Again, show your support for the sake of Allah.
            <br /> c) We’ll start working on developing a system based on
            converting fiat money into precious-metals backed stable digital
            currency. Long-shot, but Allah makes easy halal once we persevere
            through difficulties for his sake.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            The doubtful practices of the Islamic finance and home financing
          </Accordion.Header>
          <Accordion.Body>
            Sometimes there are no problems in fundamental principles of a
            particular Islamic financial instrument (like in the case of
            murabaha). In practice, however, these instruments are most often
            used with some tricks applied, becoming a disguised form of usury.
            At the same time, some of the so-called “Islamic” practices are
            simply forbidden (like al-‘ina, for example). Islamic products of
            non-Islamic banks. The capital is mixed with riba. “And do not
            assist each other in acts of sinfulness and transgression..” (Quran
            5:2) Murabaha. Purchase financing, sale on credit. In the case of
            murabaha, usually, customer says to a bank “I want to buy this
            thing”. The bank buys “this thing“ at its market price and sells it
            right back to the customer at a higher price in instalments (on
            deferred payment basis). The problem is that the bank didn't think
            or plan on buying those goods before customer asked for it. Banks
            can also use a binding promise on the customer to purchase “the
            thing” before buying it, or can reach an agreement with sellers
            about returning the goods if the customer eventually refuses to buy
            them. Basically, banks sell what they don’t own, hide a usual
            interest-based loan, and avoid risks. Hadith “Do not sell what you
            do not possess.” (Abu Dawud 3503) Commentary Sheikh Ash-Shinqiti
            says about murabaha (commentary to Umdat al-Ahkam, lecture format,
            translation of parts of the Sheikh's answer): “...The least what can
            be said about this deal is doubtful... So, such contract is invalid.
            If bank buys some goods and is then selling it in instalments, no
            problem. But when you come and show what you want to buy, there is
            no any doubt that it is riba...” Al-‘ina. Loans and refinancing.
            Customer says “I need cash”. The bank buys from the customer some
            asset the customer possesses, at its market price, for cash. Then
            the bank sells this asset right back to the customer, for a higher
            price, on deferred payment basis (in instalments). Such contract is
            not only a trick, but also mentioned specifically in a dedicated
            hadith. Hadith "When you enter into ‘ina transaction… Allah will
            make disgrace prevail over you..." (Abu Dawud 3503) Tawarruq.
            Reverse murabaha. Loans. Customer says “I want to borrow cash”. Bank
            says “Buy from us this asset, which we fully possess (like gold, for
            example), in instalments (deferred payment) for a higher-than-market
            price. Bank also says “Then, you sell this asset for cash, at its
            market value, to a third party buyer. By the way, we know a buyer
            willing to buy this asset right now. And even better, we will do a
            “serviced” sale on your behalf”. That way bank tries to shift the
            issue of “selling what they don’t own” by involving a multiple-party
            scheme, hoping to hide a plain cash loan. Home financing Islamic
            mortgage is typically based on murabaha or musharaka. In case of
            murabaha, as we described above, financing providers normally buy
            the house you told them to buy, avoiding many risks. Musharaka is a
            term used when partners invest in enterprises and businesses
            together, and the risks are split between them. When applied to
            Islamic mortgage, musharaka means that the housing unit is purchased
            and owned by the provider and the customer in shares, and the
            ownership transfers gradually to the customer, following deferred
            instalment payments. However, musharaka also has two issues.
            <ol>
              <li>
                Customers show the exact property they want to buy. Financing
                providers try to avoid risks by making sure the transaction can
                be reverted with no financial burden in case something goes
                sideways.
              </li>
              <li>
                Instalment payment amount can change due to market fluctuations,
                which is an element of uncertainty (al-gharar).
              </li>
            </ol>
            Islamic saving accounts. Sukuk. Islamic alternative for bonds,
            called Sukuk, often serve as an underlying instrument of “Islamic”
            saving accounts. In 2007 the regulating authority for Islamic
            Finance, called the Accounting and Auditing Organisation for Islamic
            Financial Institutions (AAOIFI), stated that 85% of Sukuk are not
            halal. One of the arguments was that typical Sukuk had a guarantee
            of the repayment of the face value. Since then the mentioned
            authority has not made similar claims. However, there is no evidence
            to suggest that now Sukuk have become mostly halal. Even if 100% of
            Sukuk have become non-guaranteed, they are still underlined by the
            banking instruments based on or similar to murabaha or “Islamic
            mortgages”. In 2021, for example, one of the largest Sukuk funds had
            at least 28% of its Sukuk based on doubtful instruments.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How is Emanpay avoiding the doubtful?
          </Accordion.Header>
          <Accordion.Body>
            We are covering each issue and the solution on our social media, in
            our series of articles on "Islamic finance challenges". Follow us to
            learn how we can tackle each challenge!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
