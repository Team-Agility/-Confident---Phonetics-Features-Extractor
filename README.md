# Confident Phonetics Features Extractor

## Getting Started

1. Install Prerequired:

    - Install Python [install Python 3.7](https://www.python.org/downloads/)
    - Install UI Path Studio [UI Path Studio](https://www.uipath.com/developers/studio-download)
    

2. Install Required Python Packages:

    ```
    $ cd Backend
    $ pip install -r requirements.txt
    ```

3. Download Dataset

    Estimated Size: 1.94 GiB.

    ```
    $ cd Backend
    $ python download_dataset.py
    $ python download_confidents_dataset.py
    ```

4. Update Dataset

    ```
    $ cd Backend
    $ python download_dataset.py
    ```

<hr/>

## Usage
  
1. Configure AWS CLI:

    * [Intall AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)

    ```
    $ aws configure
        AWS Access Key ID: ****************
        AWS Secret Access Key: ****************
        Default region name: ap-southeast-1
        Default output format: json
    ```

2. Serve Backend Locally:

    - Update `UI_PATH_DIR` in `utils/thread.py`

    ```
    UI_PATH_DIR = 'C:\\Users\\Administrator\\AppData\\Local\\UiPath\\app-21.4.4\\UiRobot.exe'
    ```

    ```
    $ cd Backend
    $ python serve.py
    ```

    - Serve at: [http://localhost:5000](http://localhost:5000)
    - API doc: [https://documenter.getpostman.com/view/5662193/TzecDQj6](https://documenter.getpostman.com/view/5662193/TzecDQj6)

2. Serve Frontend Locally:

    ```
    $ cd Frontend
    $ npm install
    $ npm start
    ```

    - Serve at: [http://localhost:3000](http://localhost:3000)
