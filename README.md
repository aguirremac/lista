# Lista - Note Keeper App

This is a Note Keeper App built with React, React Hooks, React Router and TailwindCSS. The backend is Firebase, which includes Firebase Authentication and Firestore.

<img src="https://lh3.googleusercontent.com/0aDUhm2rlUsSbEzjvOV1ER3aP5W3xW_sUoU3ObVJrPxWmqCA7-gdrbp8P13OJSWkNgWMiOauTOOTsd-M7ajNPoQxdDl3K_605oUtltuEMtwsmUsRo7jBrzl9MyDfK_SXQBo190Lc-so5HwxNitgGOrBo7SZW8amBowi1r-KGbpRuZQDcQRPHvuKxds-DrPxLtQbfwAhBGkT105pxLevNE9RFFdo55ZH8RVnyFYdGC2dL2P6Tdr9X7DHsPb8QFJCyZQhCKcPEaRXjx32w5eYs50PpqWQbU4-tmuvxe7ZwY881v3SYXXksIAUzJfFKazmM3kvgQtW2-Fe602XL4U1Dev77SWgRDeiZYRfNifg6woSzSuyR7_VJJCNLNm4UlL-W1D077NhrxAmqoDfoSUwgnthsZ4g_IO55w-XU0XxmPb3Fr3ClZoI_ztEE8n71sj_s7A3QttQnIzDojbI0Cl4FRa8Qo91sOzHbPeAL4TFdXUbXkMYATntzGqFWAZFJtaSycyVqQ_B2iGWfm3N-UfyuUye3fM_Rz_fp69Qei2AmwBUjQW-28rKK0KuWhf-oU--IbCgWqJmsTd52hwNPjl-NeAnEFdICY1LvUCFGZkdhxaOUxvCbxUh0LpXMUYPqs9b3wImu4O5yeC503z4v0zkeKTnSZ9kYEZQ42C8809PSWVa4Fs79L8nyCzh9ZtkcEUoaU5b1ZH0Wh22dSKUKQK-dWeCDO92dk7EMcf8SyHaYPB-Jxa9gh6FbtZoCXGMNdJMWizEy_3mHV_DleDRk7K4HSv0SJBFswRY6aHYi3mVSo64vhpBng3cpZgGyQztAm3V6a0WTasEmmx1l3diZ_NCbvQv_AiTpgZgBk312n06U-bHtjxbQaAu1yofWub0qtWDTkp34OLyb1B7CGhSe3PYj3dSSwjCItEHN4Pobx2Od5Fkm4kFBG9fIzdGUQVZ4c4axAWk_GV-sOzBXG9KVQA=w1917-h952-no?authuser=0">
<img src="https://lh3.googleusercontent.com/1iq4VX8wxfP1vrT2eDq3xQlcVCtJL88b-749XHn1KbF5Xs3iRa2hZ6CnOA5LevnWoDveYBqkSsVPmHY7hpeDyB3LkOJNOBFHeI1F3g2EDIQUFo4wF8N3OT0TC1sBJjXat7d_IAKwnJjsnFZYEHID1ivgP6I5GE1xoqVJxAdF9N_1FP9X9PmkgxppsxwaAF9ONSdTK6h7te1MjCmqCrlLnQRoLG-CZ5WTgxchx3kJlmn0tFBAQU9Jx4CwZ1VivDUqY9ZoewAD0Bw9EudCFltRXLxNPPDcwHMvz5N8E8RksdnazvtNPe5lLuDJMQiUUvGB1GaDzyei5GOwMIy-ZVlu4I29ATTPBCGkhzgILuQNjVnv-ngJbAor0qbtzH7W8qEk4YR-UyYzo28NXiU-YiwclY3yX_pZlwIJ82qXtlngG8ad1_c9P8WAeJkfqRST7bz2MWtf4WhSIA3DCcYA6Apggcs9UKr_U4WL3saMHEJ6yjSN-0xqpKr4YPhdqdf6DU59WIXFHf8EM-XVIo9RgnaB8Oprl3EhfVc1qeCZr8pMLCvHS60xlTBfAtqQi_c6X2A8osO9ZD2rdBCpXhPiJ_jtvW155d7uySYwb_V7XTggO21AtBmUnFA9EL53jSUbJMeQuIQdiOrsrUeXRWQIEHnrzjOobXX3Wq_ipg0MPna5SSNSiLHs91ac6jdbkjc2XpKTXzlq8IRC15wosJ5rlnx4MO55daXOHTy-w9kkRFpWxQlBcxbyquvyUfS_GC5OQ_fkeNq2zlwhKjsmb2Ltf4hY5TWrrGTYpjwWJxI5HaMT4L4SS2eTyyBBF98uMLukfNFuBQaNm-Su2CgSDMa7xj8uCAnrXyOnKdyVdGHajxl0POZJEao2uMZ1oiVo6NDKPHANkLxT6zo91wHDpISNEy2HMs2RU8otLIHn-r_KjpntSSr8-hrG8EFakL4pnzJEmQXLZaFvl53T2FOrP7oXlw=w1916-h959-no?authuser=0">
<img src="https://lh3.googleusercontent.com/pqpnJ3ncm58O5fL1Su5t9On19wQDzbjNuwAyZPguGIH6V7rexAK8N7A9io1MMgmm-eGLT6gc38EkZftZ9PD40xKMicao5bo59ritw6F7u4yHOV0k3FPDQM8Z8TSyHGaisxg2tpYF3v7FJlV1UfD7S-CbMs-Pl1umtUCG6ATwr-ogdXdQisOwtmH0LPs1DT7B__izU1JE3396B52sbiIvVqWNxHmBMrh44qm1ZZgEOgKUQtGhTkZdEPVGeloYmebgkL3m0mCinpVjsQkNvXwoH8mFCXAhG2ghBWGQ7IIgRbIoYUt820S9NvynyEUZG3aubEHX6BdagzEY-1o1bXzS1N9jODk1YuSQHkfnlqkLntxWVFQoHasa9s5uRJjfyfIIGFCuz7osZ7LPFLLhANuiXf3was83oBFCfTCdwuV615nck2RRBiZQLJB430Ic4sCK6IW0OPv66coDERe5qAOOeHsgYmzSa6xhh0XMBSfZwomEoERbNzZsQGODmnjIDBu2cDZul4PWuxCdqEdKjLVuVBZXs_H_PMEeM5LzQm0UCOWFvlzGnnsK8jsxZNgQwVnB4Ma-gzySUwVtSjNYss8SktYrNK-Mgm0dIHV7VTZF-VH1dojlkLikadIvFiUQkIcGsGe4xrxFC6NAYZXjMaU5Co1epfSJjBYL9tIr0sqY0a_LzvmkVtDgj2CZ19DVAOJcCQaHjZ2lwgi0KeS_0kOxh0piHPecOCbN0_LElLfwS7jRokeawISSmnMD6AU6JUpY_xk8Q20n9S-X_nbtAMSqH4elrXi-l7r9ZgBnbwTeApwDuYU5MaUFKwcHHmOcyjpaEPI1KZ0oxziB6vDsP3i9zhB_RGapysAiiPTpQzr_QOEDLU71qDSWHIAZt3Ph36dLmAfwXsHayC8BfC7C6UCjEDtonaf51G_yjosI-njfxTwlpbvu6nCDmlqWBvfOxR7sooOnCtR8JcAOUZmlYg=w1917-h957-no?authuser=0">
<img src="https://lh3.googleusercontent.com/WXUn5bVacWPX8j9QV5rIzaDgvjiv3vxVCc328Kxb2rIenkRnhvIsb9SNvL4FArUgtNPlHcbdvE40hdfC9iNPEeC9KvAMzzw-jvrKptM6e3EasdjShKIjn-vSSP9NmCokoq04YrwX1tc1ohLW9qmL-FKfJxNzAFr1v-Dpbh0LJgAePTW7iN4ZYc_myj6WmlqdJV62r7PsNHhk0Dne-sS7mc1-a0o4zYQ8qB1MYoTeIyjwkl6KT7M1E044gON-z85QcgyGNsoycP4i9CGRdLtj6DYdKSfGzfzUv6gwmIIXfQqwzkJ0RBRzMyIfOkpXv-eh8L5K7QifXfSDa72yx3vVx86EcExi7c9Z590pho70fyxPnAicHKPJVngUneISJCzoRtUQecD2iIAr1S0xgR3qOI7l0kVllkjbXRLnsX7UTm0mwSg4infSto9eA4ZrMHRlzNKHmxtTaBk0xng_AzXmXZSBUMKTU5WA9r1TDBUBRonJs2jIHPnddItYn85_qERs-OkZveeqv5UflDQiYz044qmOaXzkspd4YK8tv-Kb6ipvro9DAPHO9eF75DZGHzaV7AexiOnklFt3wg9JO7z_hki4hphPnIogffBVB13G59d-rq02Wfzop-4-Y0o9K0pkmxEaiyWn1HN5-yvbUsd2eZ0pcUgcZJY3Lrd-fFfztAa0HdTEiXcdRj5qHb6hyYwfR2f3u7iqGsXfpTjwqt-Mux1IHOA0LVlcVEM_GMk7B8HWlBJh0Plec93mVl23azJF2wZFZjKXlmZ8zjdITE3suh94Uo0JWoDl_4C83pBLCWDu7TxgxVJZZ58h7Das5QJwmcqi7rgsTY8RH0gl9CfW7IhcSmxLt_6HqZ856Dax68ey_NJaRQfOLmcp4PFvYsPOilCgkMKCz93Kav6KpgRDJJ4lVqhUQzRkNt2JDRyec-o_fcDAoOIK8p5J-cO03dsCVm5QIAuBY7Y64ralmg=w1919-h952-no?authuser=0">
<img src="https://lh3.googleusercontent.com/JhLcmRuDmRCoHRT4YRk49Gt4T0T3bJOewtnMMHivG3XSpLmOtDACztOvJ3lOzf5r9h3790f_OhlmzcY2VRLoUDAw13VJPYcdtw-0qvfLD5f6OrTW6Dv7UaQs7-ltZqya5LhjK6aANEtW1ewxX9WXQRd3vOb8aXYpuYo-0Hz0UigvXHmaT4H3KztxuSE4Nh8HJTwCPJalJPC3pID3O2v3ZtV9547uMbb9ctEtDBNTAzPDh2q92VCfWvyfTKoovwK-sGaFmUaoM4lhuTeCqGbgwgEJ0tk9eKTBzsCLP-T4wjxCnQvIYgrw8h2b0-YxvpSrCcrKjETYspnjGj3tsFAUq6U7NIkzZJIv2J8ZIuH4DXdjjDUgZUmhhZsaghwk3BII0R_wwJiv5rUJVOgetFB1-ZY1o3Tr35M_5u_3dZKovTYVGZ39wSOP0RQ9p_3sp7wqMHdEOGB6yISr61dVMfZfvqxqScpWW2wP3ve3DgmLvOh5xSYDM3ljRjr4LVqVcw42226QJ0jowFSTfj_5aSgD_zqChjQWk1cb5nNL2Ai_ENRkVSyF3UOlXx8Zs29sXoGOytjktKOmw0RK_NarewzaPmP4LmliJgGRLuZJQCuTLROvCnDxBHHKyHdB2zEBYR9_8mzhJGD8ZTVrXCfk7gxVkcTjlvWZ0h9ASIf-pzIvFj0r1YN8UNmDTlkBaZMxPSR6nNQCLvs_3ngaSvSGRX7egzF8IgpP2Q_KrS172oven0OHj31Svx5gDMZKjrl7K1VsZZ5hqKJ1NQ2k3cVWqYLrbfSMG4IBZPglhTNnv_TVKvoTqviSfPScbdJNW9jDy8iOJ8VO8jm2hBswE6evTqAdXP9MHdRnXC0maPu1c9Tjvl6GWiIAzOkPy7SZ2iVitB98hWr1F5WsFOKvXqLOk3Ryg97O5IkdsPQuaWRpLujLGVdbBEbOSJ615Po6HBD7M9F808ZlfW3_n8yN2Q8bYw=w1917-h956-no?authuser=0">



## The app allows you to:

* Create, Read, Update and Delete notes
* Sign up and login
* Store notes in the Firestore database

```bash
# Clone this repository
$ git clone https://github.com/aguirremac/lista.git

# Go into the repository
$ cd lista

# Install dependencies
$ npm install

# Run the app
$ npm start
```

The app should now be running on http://localhost:3000.

## Usage
To use the app, simply sign up or log in using the Firebase authentication system. Once you're logged in, you can create new notes, view existing notes, update notes, and delete notes.

## Contributing
If you'd like to contribute to this project, feel free to submit a pull request. Please make sure to follow the existing code style and write tests for any new functionality.

## License
This project is licensed under the MIT license. See the LICENSE file for more details.
