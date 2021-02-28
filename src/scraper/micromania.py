from scraper.common import ScrapeResult, Scraper, ScraperFactory

class MicromaniaScrapeResult(ScrapeResult):
    def parse(self):
        alert_subject = 'In Stock'
        alert_content = ''

        # get name of product
        tag = self.soup.body.select_one('body > div.page.hidden-overflow-x.page-container > div.product-detail.product-wrapper > div.bg-color-white.product-top-wrapper > div > div:nth-child(2) > div.col-12.col-lg-6.product-top-content.d-flex.flex-column > div.product-above-the-fold > div.d-flex.flex-column.flex-lg-row.justify-content-lg-between.order-1.pdp-heading-wrapper > div.pdp-name-block > h1 > span')
        if tag:
            alert_content += tag.text.strip() + '\n'
        else:
            self.logger.warning(f'missing title: {self.url}')

        # get listed price
        tag = self.soup.body.select_one('body > div.page.hidden-overflow-x.page-container > div.product-detail.product-wrapper > div.bg-color-white.product-top-wrapper > div > div:nth-child(2) > div.col-12.col-lg-6.product-top-content.d-flex.flex-column > div.product-above-the-fold > div.d-flex.flex-column.flex-lg-row.justify-content-lg-between.order-1.pdp-heading-wrapper > div.pdp-price-block.d-none.d-lg-block.line-height-1 > div > div.price > span > span > span')
        if not tag:
            tag = self.soup.body.select_one('div#price span#priceblock_ourprice')
        price_str = self.set_price(tag)
        if price_str:
            alert_subject = f'In Stock for {price_str}'

        # check for epuise message

        tag = self.soup.body.findAll(text="Le produit est épuisé 😫.")
        if tag:
            self.alert_subject = alert_subject
            self.alert_content = f'{alert_content.strip()}\n{self.url}'


@ScraperFactory.register
class MicromaniaScraper(Scraper):
    @staticmethod
    def get_domain():
        return 'Micromania'

    @staticmethod
    def get_driver_type():
        return 'selenium'

    @staticmethod
    def get_result_type():
        return MicromaniaScrapeResult
