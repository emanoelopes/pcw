<!--
 A tag <xsl:stylesheet> define o início da folha de estilos.
-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<!--

    A tag <xsl:template> define o início de um molde.
    O atributo match="/" associa (combina) o molde com a raiz (/) do documento XML de origem.

-->
<xsl:template match="/">
<!--

        O resto do documento contém o molde propriamente dito, exceto pelas duas
        últimas linhas que definem o fim do molde e o fim da folha de estilos.

-->
<html>
<body>
<h2>Boslistas do LabInfo</h2>
<table border="1">
<tr bgcolor="#9acd32">
<th>Nome</th>
<th>email</th>
<th>Telefone</th>
<th>Bolsa</th>
<th>Horário</th>
<th>Dias</th>
</tr>
<!--

                    O elemento XSL <xsl:for-each> pode ser usado para selecionar
                    todo elemento XML de um conjunto de nós específico

-->
<xsl:for-each select="bolsistas/bolsista">
<tr>
<td>
<xsl:value-of select="nome"/>
</td>
<td>
<xsl:value-of select="email"/>
</td>
<td>
<xsl:value-of select="bolsa"/>
</td>
<td>
<xsl:value-of select="dias"/>
</td>
<td>
<xsl:value-of select="horario"/>
</td>
<td>
<xsl:value-of select="dias"/>
</td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
