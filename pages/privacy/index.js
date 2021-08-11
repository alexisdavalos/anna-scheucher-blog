import dynamic from "next/dynamic";
const Intro = dynamic(import("../../components/intro"));
const Layout = dynamic(import("../../components/layout"));
import Head from "next/head";
import { useContext } from "react";
import { DarkModeContext } from "../../lib/darkModeContext";
import { HOME_OG_IMAGE_URL } from "../../lib/constants";

export default function Privacy() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const metaTitle = `FullyHolistic - Privacy Policy`;
    const metaDescription =
        "Privacy Policy for FullyHolistic a blog mostly to do with Health, Holistic Health, Fitness, Wellness and Productivity, in an effort to help you to improve your own life, health and happiness! :)";
    return (
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={HOME_OG_IMAGE_URL} />
                <meta
                    property="og:url"
                    content={`${process.env.NEXT_PUBLIC_BLOG_URL}`}
                />
                <meta property="og:site_name" content={metaTitle} />
                <meta name="twitter:card" content={metaDescription} />
                <meta
                    name="twitter:url"
                    content={`${process.env.NEXT_PUBLIC_BLOG_URL}/`}
                />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
                <meta name="twitter:description" content={metaDescription} />
                <link
                    rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BLOG_URL}/`}
                />
            </Head>
            <Intro />
            <div className="w-full flex flex-col justify-center items-center py-16 text-primary">
                {/* <!-- Top Section --></div> */}

                <section className="w-3/4 space-y-8">
                    <h1 className="font-bold text-2xl text-left">
                        Public Privacy Policy
                    </h1>
                    <h3>Last Modified: August 8th, 2021 (08/11/21)</h3>
                    <h2 className="font-bold text-lg text-left mt-4">
                        Introduction
                    </h2>
                    <p>
                        FullyHolistic (“Company” or“We”) respects your privacy,
                        and we are committed to protecting it through our
                        compliance with this policy. This policy describes the
                        types of information we may collect from you or that you
                        may provide when you visit the websites located at
                        www.fullyholistic.com and www.annascheucher.com along
                        with their subdomains, their corresponding social media
                        pages, and any associated websites or mobileapplications
                        (our “Websites”) and our practices for collecting,
                        using, maintaining, protecting, and disclosing that
                        information.
                    </p>
                    <h2>This policy applies to information we collect:</h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>On the Websites.</li>
                        <li>
                            In email, text, and other electronic messages
                            between you and the Websites
                        </li>
                        <li>
                            When you interact with our advertising and
                            applications on third-party websites and services,
                            if those applications or advertising include links
                            to this policy.
                        </li>
                        <br />
                    </ul>
                    <h2>It does not apply to information collected by:</h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>
                            Us offline or through any other means, including on
                            any other website operated by Company or any third
                            party, (including our affiliates and subsidiaries);
                            or
                        </li>
                        <li>
                            Any third party, (including our affiliates and
                            subsidiaries), including through any application or
                            content (including advertising) that may link to or
                            be accessible from or onthe Websites
                        </li>
                    </ul>
                    <p>
                        Please read this policy carefully to understand our
                        policies and practices regarding your information and
                        how we will treat it. If you do not agree with our
                        policies and practices, your choice is not to use our
                        Websites. By accessing or using this Website, you agree
                        to this privacy policy. This policy may change from time
                        to time (see Changes to Our Privacy Policy). Your
                        continued use of these Websites after we make changes is
                        deemed to be acceptance of those changes, so please
                        check the policy periodically for updates.
                    </p>
                </section>
                {/* <!-- Under 18 Section --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Children Under the Age of [13/16/18]
                    </h2>
                    <p>
                        Our Websites are not intended for children under
                        [13/16/18] years of age. No one under age [13/16/18] may
                        provide any personal information to or on the Websites.
                        We do not knowingly collect personal information from
                        children under [13/16/18]. If you are under [13/16/18],
                        do not use or provide any personal information on this
                        Website, register on the Websites, make any purchases
                        through the Websites, use any of the interactive or
                        public comment features of these Websites, or provide
                        any information about yourself to us, including your
                        name, address, telephone number, email address, or any
                        screen name or user name you may use. If we learn we
                        have collected or received personal information from a
                        child under [13/16/18] without verification of parental
                        consent, we will delete that information. If you believe
                        we might have any information from or about a child
                        under [13/16/18], please contact us at [CONTACT
                        INFORMATION].
                    </p>
                </section>
                {/* <!-- Information We Collect --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Information We Collect About You and How We Collect It
                    </h2>
                    <h2 className="text-lg text-left mt-4">
                        We collect several types of information from and about
                        users of our Websites, including information:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>
                            By which you may be personally identified, such as
                            name, e-mail address, or telephone number, or any
                            other identifier by which you may be contacted
                            online or offline (“personal information”);
                        </li>
                        <li>
                            That is about you but individually does not identify
                            you, such as messages you transmit to us or times
                            scheduled for care appointments, which we do not
                            collect or store in connection with any personal
                            information; and/or
                        </li>
                        <li>
                            About your internet connection, the equipment you
                            use to access our Website, and usage details.
                        </li>
                    </ul>

                    <h2>We collect this information:</h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>Directly from you when you provide it to us.</li>
                        <li>
                            Automatically as you navigate through the site.
                            Information collected automatically may include
                            usage details, IP addresses, and information
                            collected through cookies, web beacons, and other
                            tracking technologies.
                        </li>
                        <li>
                            [From third parties, for example, our business
                            partners.]
                        </li>
                    </ul>

                    <h2 className="font-italic">
                        Information You provide to Us
                    </h2>
                    <h2>
                        The information we collect on or through our Websites
                        may include:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>
                            Information that you provide by filling in forms on
                            our Websites. This includes information provided at
                            the time of registering to use our Websites,
                            subscribing to our services, posting material, or
                            requesting further services. We may also ask you for
                            information when you enter a contest or promotion
                            sponsored by us, and when you reporta problem with
                            our Websites.
                        </li>
                        <li>
                            Records and copies of your correspondence (including
                            email addresses), if you contact us.
                        </li>
                        <li>
                            Your responses to surveys that we might ask you to
                            complete for research purposes.
                        </li>
                        <li>
                            Details of transactions, if any, you carry out
                            through our Websites and of the fulfillment of your
                            orders. You may be required to provide financial
                            information before placing an order through our
                            Websites.
                        </li>
                        <li>Your search queries on the Websites.</li>
                    </ul>

                    <p>
                        You also may provide information to be published or
                        displayed (hereinafter, “posted”) on publicareas of the
                        Website, or transmitted to other users of the Websites
                        or third parties (collectively, “User Contributions”).
                        Your User Contributions are posted on and transmitted to
                        others at your own risk. Although you may set certain
                        privacy settings for such information by logging into
                        your account profile, please be aware that no security
                        measures are perfect or impenetrable. Additionally, we
                        cannot control the actions of other users of the
                        Websites with whom you may choose to share your User
                        Contributions. Therefore, we cannot and do not guarantee
                        that your User Contributions will not be viewed by
                        unauthorized persons.
                    </p>

                    <h2 className="font-italic">
                        Information We Collect Through Automatic Data Collection
                        Technologies
                    </h2>
                    <h2>
                        As you navigate through and interact with our Website,
                        we may use automatic data collection technologies to
                        collect certain information about your equipment,
                        browsing actions, and patterns,including:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>
                            Details of your visits to our Website, which may
                            include traffic data, location data, logs, and other
                            communication data and the resources that you access
                            and use on the Websites.
                        </li>
                        <li>
                            Information about your computer and internet
                            connection, including your IP address, operating
                            system, and browser type.
                        </li>
                    </ul>
                    <p>
                        However, we do not collect personal information in
                        connection with the items listed in the paragraphs in
                        this section, above. Instead, we use these technologies
                        to aggregate information about your online activities
                        over time and across third-party websites or other
                        online services (behavioral tracking) (“Aggregated
                        Information”). This Aggregated Information is fully
                        deidentified and cannot be linked to you.
                    </p>
                    <p>
                        The Aggregated Information we collect automatically is
                        only statistical data and does not includepersonal
                        information. It helps us to improve our Websites and to
                        deliver a better and more personalized service,
                        including by enabling us to:
                    </p>

                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>Estimate our audience size and usage patterns.</li>
                        <li>
                            Store information about your preferences, allowing
                            us to customize our Websites according to your
                            individual interests.
                        </li>
                        <li>Speed up your searches.</li>
                        <li>Recognize you when you return to our Websites.</li>
                    </ul>
                    <h2>
                        The technologies we use for this automatic data
                        collection may include:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>Estimate our audience size and usage patterns.</li>
                        <li>
                            Store information about your preferences, allowing
                            us to customize our Websites according to your
                            individual interests.
                        </li>
                        <li>Speed up your searches.</li>
                        <li>Recognize you when you return to our Websites.</li>
                    </ul>
                    <h2>
                        The technologies we use for this automatic data
                        collection may include:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>
                            Cookies (or browser cookies). A cookie is a small
                            file placed on the hard drive of your computer. You
                            may refuse to accept browser cookies by activating
                            the appropriate settingon your browser. However, if
                            you select this setting you may be unable to access
                            certain parts of our Websites. Unless you have
                            adjusted your browser setting so that it will
                            refusecookies, our system will issue cookies when
                            you direct your browser to our Websites.
                        </li>
                        <li>
                            Web Beacons. Pages of our Websites may contain small
                            electronic files known as web beacons (also referred
                            to as clear gifs, pixel tags, and single-pixel gifs)
                            that permit the Company, for example, to count users
                            who have visited those pages and for other related
                            website statistics (for example, recording the
                            popularity of certain Website content and verifying
                            system and server integrity).
                        </li>
                    </ul>

                    <h2 className="font-bold text-lg text-left mt-4">
                        Sales of Aggregated Information
                    </h2>
                    <p>
                        We may sell the Aggregated Information that we collect,
                        reflecting the behavioral actions users take on our
                        sites. For example, Aggregated Information may show how
                        many users filled out a contact form on our Websites.
                        However, we don’t share, disclose, or sell any personal
                        information when we sell Aggregated Information.
                    </p>
                    <h2 className="font-bold text-lg text-left mt-4">
                        Third-Party Use of Cookies and Other Tracking
                        Technologies
                    </h2>
                    <p>
                        Some content or applications, including advertisements,
                        on the Websites are served by third-parties, including
                        advertisers, ad networks and servers, content providers,
                        and application providers. These third parties may use
                        cookies alone or in conjunction with web beacons or
                        othertracking technologies to collect information about
                        you when you use our Websites. The information they
                        collect may be associated with your personal information
                        or they may collect information, including personal
                        information, about your online activities over time and
                        across different websites and other online services.
                        They may use this information to provide you with
                        interest-based (behavioral) advertising or other
                        targeted content.
                    </p>
                    <p>
                        We do not control these third parties’ tracking
                        technologies or how they may be used. If you have any
                        questions about an advertisement or other targeted
                        content, you should contact the responsible provider
                        directly. For information about how you can opt out of
                        receiving targeted advertising from many providers, see
                        Choices About How We Use and Disclose Your Information.
                    </p>
                </section>

                {/* <!-- How We Use Your Information --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        How We Use Your Information
                    </h2>
                    <h2>
                        We use information that we collect about you or that you
                        provide to us, including any personal information:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>
                            To present our Websites and their contents to you.
                        </li>
                        <li>
                            To provide you with information, products, or
                            services that you request from us.
                        </li>
                        <li>
                            To fulfill any other purpose for which you provide
                            it, including linking to medical appointment
                            scheduling information applications (without
                            accessing, storing, or disclosing any medical or
                            patient information).
                        </li>
                        <li>To provide you with notices about your account</li>
                        <li>
                            To carry out our obligations and enforce our rights
                            arising from any contracts entered intobetween you
                            and us, including for billing and collection.
                        </li>
                        <li>
                            To notify you about changes to our Websites or any
                            products or services we offer or provide though it.
                        </li>
                        <li>
                            To allow you to participate in interactive features
                            on our Websites.
                        </li>
                        <li>
                            In any other way we may describe when you provide
                            the information.
                        </li>
                        <li>For any other purpose with your consent.</li>
                    </ul>
                    <p>
                        We may also use your information to contact you about
                        our own and third parties’ goods and services that may
                        be of interest to you. If you do not want us to use your
                        information in this way,please [check the relevant box
                        located on the form on which we collect your data (the
                        [order form/registration form])/adjust your user
                        preferences in your account profile.] For more
                        information, see Choices About How We Use and Disclose
                        Your Information.
                    </p>
                    <p>
                        We may use the information we have collected from you to
                        enable us to display advertisements to our advertisers'
                        target audiences. Even though we do not disclose your
                        personal information for these purposes without your
                        consent, if you click on or otherwise interact with an
                        advertisement, the advertiser may assume that you meet
                        its target criteria.]
                    </p>
                </section>

                {/* <!-- Disclosure of Your Information --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Disclosure of Your Information
                    </h2>
                    <h2>
                        We may disclose Aggregated Information about our users,
                        and information that does not identifyany individual,
                        without restriction.
                    </h2>
                    <h2>
                        We may disclose personal information that we collect or
                        you provide as described in this privacypolicy:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>To our subsidiaries and affiliates.</li>
                        <li>
                            To contractors, service providers, and other third
                            parties we use to support our business and who are
                            bound by contractual obligations to keep personal
                            information confidential and use it only for the
                            purposes for which we disclose it to them.
                        </li>
                        <li>
                            To a buyer or other successor in the event of a
                            merger, divestiture, restructuring, reorganization,
                            dissolution, or other sale or transfer of some or
                            all of FullyHolistic's assets, whether as a going
                            concern or as part of bankruptcy, liquidation, or
                            similar proceeding, in which personal information
                            held by FullyHolistic, about our Websites’ users is
                            among the assets transferred.
                        </li>
                        <li>
                            [To third parties to market their products or
                            services to you if you have [consented to/not opted
                            out of] these disclosures. [We contractually require
                            these third parties to keep personal information
                            confidential and use it only for the purposes for
                            which we disclose itto them.] For more information,
                            see Choices About How We Use and Disclose Your
                            Information]
                        </li>
                        <li>
                            To fulfill the purpose for which you provide it.
                        </li>
                        <li>
                            For any other purpose disclosed by us when you
                            provide the information.
                        </li>
                        <li>With your consent.</li>
                        <li>
                            To comply with any court order, law, or legal
                            process, including to respond to any government or
                            regulatory request.
                        </li>
                        <li>
                            To enforce or apply our terms of use and other
                            agreements, including for billing and collection
                            purposes.
                        </li>
                        <li>
                            ·If we believe disclosure is necessary or
                            appropriate to protect the rights, property, or
                            safety of FullyHolistic, our customers, or others.
                        </li>
                    </ul>
                </section>

                {/* <!-- Choice About How We Use and Disclose of Your Information --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Choice About How We Use and Disclose of Your Information
                    </h2>
                    <h2>
                        We strive to provide you with choices regarding the
                        personal information you provide to us. We have created
                        mechanisms to provide you with the following control
                        over your information:
                    </h2>
                    <ul className="list-disc ml-4 space-y-4 list-inside">
                        <li>
                            Tracking Technologies and Advertising. You can set
                            your browser to refuse all or some browser cookies,
                            or to alert you when cookies are being sent. If you
                            disable or refuse cookies, please note that some
                            parts of this site may then be inaccessible or not
                            function properly.
                        </li>
                        <li>
                            [Targeted Advertising. If you do not want us to use
                            information that we collect or that you provide to
                            us to deliver advertisements according to our
                            advertisers’ target-audience preferences, you can
                            opt-out by [OPT-OUT METHOD].
                        </li>
                    </ul>
                    <p>
                        We do not control third parties' collection or use of
                        your information to serve interest-based advertising.
                        However, these third parties may provide you with ways
                        to choose not to have your 6 information collected or
                        used in this way. You can opt out of receiving targeted
                        ads from members of the Network Advertising Initiative
                        (“NAI”) on the NAI's website.We do not currently sell
                        data triggering requirements set forth by California or
                        Nevada law. The only information collected on our
                        Websites that we sell is Aggregated Information.
                    </p>
                </section>

                {/* <!-- Accessing and Correcting Your Information --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Accessing and Correcting Your Information
                    </h2>
                    <p>
                        [You can review and change your personal information by
                        logging into the Websites and visitingyour account
                        profile page.]
                    </p>
                    <p>
                        You may also send us an email at [EMAIL ADDRESS] to
                        request access to, correct or delete anypersonal
                        information that you have provided to us. We cannot
                        delete your personal information except by also deleting
                        your user account. We may not accommodate a request to
                        change information if we believe the change would
                        violate any law or legal requirement or cause the
                        information to be incorrect.
                    </p>
                    <p>
                        If you delete your User Contributions from the Websites,
                        copies of your User Contributions may remain viewable in
                        cached and archived pages, or might have been copied or
                        stored by other users.
                    </p>
                </section>

                {/* <!-- Your California Privacy Rights --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Your California Privacy Rights
                    </h2>
                    <p>
                        We are not obligated to comply with the full
                        requirements of the California Consumer Privacy Act
                        (“CCPA”).
                    </p>
                    <p>
                        California's “Shine the Light” law (Civil Code Section §
                        1798.83) permits users of our App that are California
                        residents to request certain information regarding our
                        disclosure of personal information to third parties for
                        their direct marketing purposes. We currently do not
                        disclose personal information to third parties for
                        direct marketing purposes. However, to make such a
                        request, please send an email to [EMAIL ADDRESS]. Please
                        allow us 30 days for a response.
                    </p>
                    <p>
                        California’s Online Privacy Protection Act (Cal. Bus. &
                        Prof. C. §§22575-22579) (“CalOPPA”),requires website
                        operators to disclose how they respond to web browser
                        “do not track” signals orother similar mechanisms that
                        provide consumers with the ability to exercise choice
                        regarding the collection of personally identifiable
                        information of a consumer over time and across third
                        party websites and apps, to the extent the operator
                        engages in that collection. At this time, we do not
                        respond to Do Not Track (DNT) signals. This law also
                        requires website and app operators to disclose whether
                        third parties may collect personally identifiable
                        information about their users’ online activities over
                        time and across different websites and apps when the
                        users use the operator’s website or app. The nature of
                        how third parties may collect or receive personally
                        identifiable information is disclosed in this Privacy
                        Policy. To learn more about how Do Not Track signals
                        work, please visit{" "}
                        <a
                            href="http://allaboutdnt.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            http://allaboutdnt.com/.
                        </a>
                    </p>
                </section>

                {/* <!-- Data Security --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Data Security
                    </h2>
                    <p>
                        We have implemented measures designed to secure your
                        personal information from accidental loss and from
                        unauthorized access, use, alteration, and disclosure.
                        All information you provide tous is stored on our secure
                        servers behind firewalls. Any payment transactions will
                        be encrypted using SSL technology.
                    </p>
                    <p>
                        The safety and security of your information also depends
                        on you. Where we have given you (or where you have
                        chosen) a password for access to certain parts of our
                        Websites, you are responsible for keeping this password
                        confidential. We ask you not to share your password with
                        anyone. We urge you to be careful about giving out
                        information in public areas of the Websites like message
                        boards. The information you share in public areas may be
                        viewed by any user of the Websites.
                    </p>
                    <p>
                        Unfortunately, the transmission of information via the
                        internet is not completely secure. Although we do our
                        best to protect your personal information, we cannot
                        guarantee the security of your personal information
                        transmitted to our Websites. Any transmission of
                        personal information is at your own risk. We are not
                        responsible for circumvention of any privacy settingsor
                        security measures contained on the Websites.
                    </p>
                </section>

                {/* <!-- Chnages to Our Privacy Policy --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Changes to Our Privacy Policy
                    </h2>
                    <p>
                        It is our policy to post any changes we make to our
                        privacy policy on this page. If we make material changes
                        to how we treat our users’ personal information, we will
                        notify you by email to the email address specified in
                        your account. The date the privacy policy was last
                        revised is identified at the top of the page. You are
                        responsible for ensuring we have an up-to-date active
                        and deliverable email address for you, and for
                        periodically visiting our Websites and this
                        privacypolicy to check for any changes.
                    </p>
                </section>

                {/* <!-- Chnages to Our Privacy Policy --> */}
                <section className="w-3/4 space-y-8">
                    <h2 className="font-bold text-lg text-left mt-4">
                        Contact Information
                    </h2>
                    <p>
                        <span>
                            To ask questions or comment about this privacy
                            policy and our privacy practices, contact us{" "}
                        </span>
                        <a href="mailto:alexisdavalos.dev@gmail.com subject=Privacy Policy">
                            here
                        </a>
                    </p>
                </section>
            </div>
        </Layout>
    );
}
