from scraper.common import ScrapeResult, Scraper, ScraperFactory


class CarrefourScrapeResult(ScrapeResult):
    def parse(self):
        alert_subject = 'In Stock'
        alert_content = ''

        # get name of product
        tag = self.soup.body.select_one('#data-produit-card > div.pdp-card__header.desktop-only > div.pdp-card__header--text > h1')
        if tag:
            alert_content += tag.text.strip() + '\n'
        else:
            self.logger.warning(f'missing title: {self.url}')

        # get listed price
        tag = self.soup.body.select_one('#data-produit-card > div.main-details__pricing > div > div > div > div.pdp-pricing__block-left > div.product-card-price > div > span')
        if not tag:
            tag = self.soup.body.select_one('div#price span#priceblock_ourprice')
        price_str = self.set_price(tag)
        if price_str:
            alert_subject = f'In Stock for {price_str}'

        # check for add to cart button
        
        
        tag = self.soup.body.select_one('#data-produit-acheter > button > span > span')
        if tag:
            self.alert_subject = alert_subject
            self.alert_content = f'{alert_content.strip()}\n{self.url}'


@ScraperFactory.register
class CarrefourScraper(Scraper):
    @staticmethod
    def get_domain():
        return 'carrefour'

    @staticmethod
    def get_driver_type():
        return 'selenium'

    @staticmethod
    def get_result_type():
        return CarrefourScrapeResult
