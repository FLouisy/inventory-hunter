import scraper.adorama                                                                                                                                                                                      
import scraper.amazon
import scraper.bestbuy
import scraper.bhphotovideo
import scraper.canadacomputers
import scraper.carrefour
import scraper.costco
import scraper.cdiscount
import scraper.ebgames
import scraper.fnac
import scraper.microcenter
import scraper.micromania
import scraper.newegg
import scraper.playstation
import scraper.samsclub
import scraper.toysrus
import scraper.walmart

from scraper.common import ScraperFactory


def init_scrapers(config, drivers):
    return [ScraperFactory.create(drivers, url) for url in config.urls]
