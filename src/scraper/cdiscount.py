from scraper.common import ScrapeResult, Scraper, ScraperFactory
import logging

class CdiscountScrapeResult(ScrapeResult):
    def parse(self):
        alert_subject = 'In Stock'
        alert_content = ''

        # get name of product
        tag = self.soup.body.select_one('#fpZnPrdMain > div.fpTMain > div.fpDesCol > h1')
        if tag:
            alert_content += tag.text.strip() + '\n'
        else:
            self.logger.warning(f'missing title: {self.url}')

        # get listed price
        tag = self.soup.body.select_one('#addForm > div.fpPriceBloc.jsFpPriceBloc.fpSmallPrice.fpNoStrikedPrice.jsFpPurchasePriceBloc > span.fpPrice.price.jsMainPrice.jsProductPrice.hideFromPro')
        if not tag:
            tag = self.soup.body.select_one('div#price span#priceblock_ourprice')
        price_str = self.set_price(tag)
        if price_str:
            alert_subject = f'In Stock for {price_str}'

        # check for add to cart button       
        tag = self.soup.body.findAll(string="Actuellement indisponible")

        if not tag:
            self.alert_subject = alert_subject
            self.alert_content = f'{alert_content.strip()}\n{self.url}'


@ScraperFactory.register
class CdiscountScraper(Scraper):
    @staticmethod
    def get_domain():
        return 'cdiscount'

    @staticmethod
    def get_driver_type():
        return 'selenium'

    @staticmethod
    def get_result_type():
        return CdiscountScrapeResult
