from scraper.common import ScrapeResult, Scraper, ScraperFactory


class FnacScrapeResult(ScrapeResult):
    def parse(self):
        alert_subject = 'In Stock'
        alert_content = ''

        # get name of product
        tag = self.soup.body.select_one('body > div.Main.Main--fullWidth > div > div.productPageTop > section.f-productHeader.js-articleHeader > h1')
        if tag:
            alert_content += tag.text.strip() + '\n'
        else:
            self.logger.warning(f'missing title: {self.url}')

        # get listed price
        tag = self.soup.body.select_one('body > div.Main.Main--fullWidth > div > div.productPageTop > div.f-productPage-colRight.clearfix > section > ul.f-productOffers-contents.js-productOffersContent > li > div > div.f-productOffer.f-productOffer--options.clearfix > div > div.f-productOffer-priceBox > div.f-priceBox > span')
        if not tag:
            tag = self.soup.body.select_one('div#price span#priceblock_ourprice')
        price_str = self.set_price(tag)
        if price_str:
            alert_subject = f'In Stock for {price_str}'

        # check for add to cart button
        tag = self.soup.body.select_one('body > div.Main.Main--fullWidth > div > div.productPageTop > div.f-productPage-colRight.clearfix > section > ul.f-productOffers-contents.js-productOffersContent > li > div > div.f-buyShopBox > div:nth-child(1) > div.f-buyBox-buttons > button')
        if tag:
            self.alert_subject = alert_subject
            self.alert_content = f'{alert_content.strip()}\n{self.url}'


@ScraperFactory.register
class FnacScraper(Scraper):
    @staticmethod
    def get_domain():
        return 'fnac'

    @staticmethod
    def get_driver_type():
        return 'selenium'

    @staticmethod
    def get_result_type():
        return FnacScrapeResult
